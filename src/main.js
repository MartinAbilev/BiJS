import * as tf from '@tensorflow/tfjs'
import * as nj from 'numjs'

const logz = console.log

const text_in = document.getElementById('text_in')

const myRec = new p5.SpeechRec('en-US')// new P5.SpeechRec object
// myRec.continuous = true // do continuous recognition
myRec.recording = false
myRec.onStart = () =>
{
	myRec.recording = true
}
myRec.onResult = () =>
{
	const mostrecentrec = myRec.resultString
	out_text.textContent = mostrecentrec
	text_in.value = mostrecentrec
	logz(' VOICE RECOGNITION RETURN: ',mostrecentrec)
	var event = new Event('change');

	text_in.dispatchEvent(event);
}
myRec.onEnd = () =>
{
	myRec.recording = false
	window.biVoice.speak('...')
}

// myRec.interimResults = true // allow partial recognition (faster, less accurate)	
let prvious_question = ''
class bianka
{
	async init(question)
	{

		let selfLoss = []

		const out_text = document.getElementById('out_text')

		logz('TEXT FROM INPUT: ', question)
		
		const convo_initial =
		[
			{x:question, y:question, t:question},
			{x:'tu', y:'es', t:'esmu'},
			{x:'es bianka', y:'kas tu ?', t:'es'},
			{x:'kas tu esi ?', y:'bianka es esmu .', t: 'esmu es'},
			{x:'es esmu', y:'tu esi', t:'esmu'}
		]

		const convo_loaded = await load_convo()
		logz('convo loaded: ', await convo_loaded)

		let convo = [...convo_initial]

		let convos_len = 0

		let convo_vocab = []

		convo_loaded && convo_loaded.map && convo_loaded.map((sample)=>
		{
			convos_len ++
			convo.push(sample)
			sample.x.split(' ').map(smp=>convo_vocab.push(smp))
			sample.y.split(' ').map(smp=>convo_vocab.push(smp))
			sample.t.split(' ').map(smp=>convo_vocab.push(smp))
		})
		convo_vocab = Array.from(new Set(convo_vocab))

		logz('CONVO VOC .,.', convo_vocab)

		var tokens =
		[
			'PAD',
			'***RUN***',
			'UNK',
			'EOS',
			'es',
			'esmu',
			'bianka',
			'bianca',
			'Bianka',
			'Bianca',
			'kas',
			'esi',
			'tu',
			'?',
			'.'
		]
		for(let vi =0 ; vi<convo_vocab.length; vi++)
		{
			tokens.push(convo_vocab[vi])
		}
		logz('VOC2', tokens.length, tokens[1])

		const vocab_len = tokens.length
		const vocab = {}
		const voc2id = {}
		const id2voc = []
		const sentence_max_len = 6
		vocab.size = vocab_len

		tokens.map((token, key)=>
		{
			id2voc[key] = token
			vocab[token] = key
			voc2id[token] = key
		})
		logz('VOCAB: ', vocab['es'], id2voc[vocab['es']])
		logz('PAD: ', vocab['PAD'], id2voc[vocab['PAD']])
		logz('UNK: ', vocab['UNK'], id2voc[vocab['UNK']])
		logz('EOS: ', vocab['EOS'], id2voc[vocab['EOS']])

		function tokenize(sample)
		{
			if(sample)
			{
				logz('TOKENIZER SAMPLE: ', sample)
				var xtemp =  sample.x.split(' ').map(token=> vocab[token] )
				var ytemp =  sample.y.split(' ').map(token=> vocab[token] )

				var x = []
				var y = []
				for(let i =0 ; i < sentence_max_len-1; i++)
				{
					x.push(xtemp[i] || 0)
					y.push(ytemp[i] || 0)
				}
	
				x.push(vocab['EOS'] || 0)
				y.push(ytemp['EOS'] || 0)
	
				return {x:x, y:y}
			}
			else
			{
				return null
			}

		}
		async function save_model(model)
		{
			// save trained model
			logz('save model: ', model.name)

			return await model.save(window.location.origin + '/upload')
		}
		async function load_model()
		{
			// load model
			return await tf.loadModel(window.location.origin + '/datasets/model.json').catch(err =>
			{
				logz('model get err: ', {eror: err})
			})
		}
		async function save_convo(convo)
		{
			return await fetch(window.location.origin + '/convo',
			{
				method: 'POST',
				headers:
				{
				'Accept': 'application/json',
				'Content-Type': 'application/json'
				},
				body: JSON.stringify(convo)
			})
		}
		async function load_convo()
		{
			return await fetch('datasets/convo.json',
			{
				method: 'get',
				headers:
				{
				'Accept': 'application/json',
				'Content-Type': 'application/json'
				}
			}).then((res)=>
			{
				return res.json()
			}).catch((err)=>
			{
				logz('load json fail: ',err)
				return null
			})
		}

		let BATCH_SIZE = 32

		//***********************************************************************/
		// Define a model for linear regression.

		const inputShape =  [vocab_len, sentence_max_len]


		const encoder_inputs = tf.input({shape: inputShape, name: 'encoder_inputs' })
		const decoder_inputs = tf.input({shape: inputShape, name: 'decoder_inputs' })

		var sample_previous = null
		function nextBath(bin)
		{
				const xdata = nj.zeros([BATCH_SIZE,vocab_len,sentence_max_len])
				const ydata = nj.zeros(xdata.shape)
				const tdata = nj.zeros(xdata.shape)

				let sample = tokenize(convo[bin])

				const temp_convo = Array.from(convo)

				for(let b = 0; b < BATCH_SIZE; b++)
				{
					sample = tokenize(temp_convo[bin + b]) || sample
					sample_previous = tokenize(temp_convo[bin + b - 1]) || sample


					for(let x = 0; x < sentence_max_len; x++)
					{
						const vx = sample.x 
						const vy = sample.y

						const vt = sample_previous ? sample_previous.y[x] : sample.y[x]

						xdata.set(b, vx[x], x, 1.0)
						ydata.set(b, vy[x], x, 1.0)
						tdata.set(b, vt[x], x, 1.0)
					}
				}

				const xs = tf.tensor(xdata.tolist(), xdata.shape)
				const ys = tf.tensor(ydata.tolist(), xdata.shape)
				const ts = tf.tensor(tdata.tolist(), xdata.shape)

				xs.print()
				ys.print()
				ts.print()
				
			

				return [xs,ys,ts]
		}

		const [state_c, state_h] = tf.layers.lstm(
		{
			units: sentence_max_len,
			returnState:true,
			returnSequences: false
		}).apply(encoder_inputs)
		
		const encoder_states = [state_c,state_h]

		const decoder_outputs_lstm = tf.layers.lstm(
		{
			units: sentence_max_len,
			returnState:false,
			returnSequences: true,
			initialState: encoder_states
		}).apply(decoder_inputs)

		const decoder_dense = tf.layers.dense(
		{
			units: sentence_max_len,activation: 'softmax', name: 'decoder_dense_model_A'
		}).apply(decoder_outputs_lstm)

		const model = tf.model({inputs: [encoder_inputs, decoder_inputs], outputs: decoder_dense })

		// load previous save if exist
		const modelB = await load_model()
		try
		{
			model.setWeights(modelB.getWeights())
		}
		catch (error)
		{
			logz('model not match to set wights')
		}
		await model.summary()

		//***********************************************************************/
				
		const rnd = parseInt(Math.random()*convos_len)
		const [xtensor,ytensor,ttensor] = nextBath( rnd )

		// Train the model using the data.
		logz('TRAIN START')
		// Prepare the model for training: Specify the loss and the optimizer.

		model.compile({optimizer: 'rmsprop', loss: 'categoricalCrossentropy'})
		var avrg = 0
		const hm = await model.fit([xtensor, ytensor], ttensor,
		{
			epochs: 3,
			batchSize: BATCH_SIZE,
			// validationSplit: 0.5,
			callbacks:
			{
				onEpochEnd: async (epoch, rlog) =>
				{
					logz('train', rlog.loss)
					out_text.textContent = `Epoch ${epoch}: loss = ${rlog.loss}`
					selfLoss.push(rlog.loss)
				}
			}
		}).then(async() =>
		{
			const result = model.evaluate(	[xtensor, ttensor],ytensor, {batchSize: BATCH_SIZE} )

			selfLoss.map(loss=>
			{
				avrg += loss
			})
			selfLoss = avrg/selfLoss.length

			await logz('LOSS FOR EPOCH...',result.toString(), ' avrg loss =',	selfLoss	)

			selfLoss > 0.01 ? await save_model(model) : logz('to small loss dont save')

			return await selfLoss
		})
	
		async function predictor(callback)
		{
			// make prediction model
			//
			// 
			const encoder_model = tf.model({inputs: encoder_inputs, outputs: encoder_states})
			const decoder_state_input_h =  tf.input({shape: [ sentence_max_len, ], name: 'decoder_state_inp_h'})
			const decoder_state_input_c =  tf.input({shape: [ sentence_max_len, ], name: 'decoder_state_inp_c'})
			const decoder_states_inputs = [decoder_state_input_h, decoder_state_input_c]
			const [decoder_sequences, state_c2, state_h2 ]= tf.layers.lstm(
			{
				units: sentence_max_len,
				returnState:true,
				returnSequences: true,
				initialState: decoder_states_inputs,
				name: 'last_predictor_lstm'
			}).apply(decoder_inputs)
			const decoder_outputs = tf.layers.dense(
			{
				units: sentence_max_len,
				activation: 'softmax',
				name: 'decoder_dense2_model_D'
			}).apply( decoder_sequences )
			const decoder_model = tf.model( { inputs: [decoder_inputs, decoder_state_input_h, decoder_state_input_c], outputs: [decoder_outputs, state_c2, state_h2] } )

			await encoder_model.summary()
			await decoder_model.summary()

			// parse question
			//
			const encoder_predict_ids_list = []
			const question_split = question.split(' ')
			const question_ids =  question_split.map(token=>{return voc2id[token] || voc2id['UNK'] })

			logz('QUESTION TO IDS', question_ids)

			for(let tok = 0 ; tok < sentence_max_len ;  tok++)
			{
				encoder_predict_ids_list.push(question_ids[tok] || voc2id['PAD'] )
			}

			logz('QUESTION FOR STATE ', encoder_predict_ids_list)
			//
			let encoder_predict_zeros = nj.zeros([ 1, vocab_len, sentence_max_len ])


				encoder_predict_ids_list.map(( v, xaxis)=>
				{
					encoder_predict_zeros.set(0, v, xaxis, 1)
				})


			let encoder_predict = tf.tensor(encoder_predict_zeros.tolist(), encoder_predict_zeros.shape)
			logz('PREDJIKXz', encoder_predict_zeros)
			await encoder_predict.print()

			let states_value = await encoder_model.predict(encoder_predict)

			await logz('ENCODER STATES PREDICTED FROM QUESTION', ...states_value)

			let target_seq_zeros = nj.zeros([ 1, vocab_len, sentence_max_len ])

			encoder_predict_ids_list.map((v, xaxis)=>
			{
				encoder_predict_zeros.set(0, 1, xaxis, 1)
			})
			
			var target_seq = tf.tensor(target_seq_zeros.tolist(), target_seq_zeros.shape)
			await target_seq.print()

			var decoded_sentence = []
			var counter = 0
			var stop_condition = false

			while (!stop_condition)
			{
				let [output_tokens, h, c] = decoder_model.predict( [target_seq, ...states_value] )
				logz([output_tokens, h, c])
				// # Sample a token
				const axis = 1
				const sampled_token_index = output_tokens.argMax(axis)
				logz('SAMPLED TOKEN:')
				sampled_token_index.print()
				const sampled_char = sampled_token_index.dataSync()
				decoded_sentence[counter] = sampled_char
				// # Exit condition: either hit max length
				// # or find stop character.
				if (counter >= sentence_max_len)
				{
					stop_condition = true
					logz('STOP CHECK A')
					callback(sampled_char, decoded_sentence)
				}
				// # Update the target sequence.
				for(let b = 0; b < BATCH_SIZE; b++)
				{
					for(let v = 0; v < sentence_max_len; v++)
					{
					target_seq_zeros.set(b,sampled_char[v], v, 1.0)
					}
				}
				target_seq =  tf.tensor(target_seq_zeros.tolist(), target_seq_zeros.shape)
				// # Update states
				states_value = [h, c]
				counter ++
			}
		}
		predictor(async function(pred, dec)
		{
			logz('FINAL PREDICTED: ', await pred, dec)

			var ansver = []
			pred.map((id, key)=>
			{
				key < sentence_max_len && id > 3 && ansver.push(id2voc[id])
			})
			logz('ANSVER: ', ansver)
			out_text.innerText = ansver
			ansver = ansver.join(' ')
			
			var voice_str = ansver.replace('bianka', 'Bianca')
				voice_str = voice_str.replace('bjanka', 'Bianca')
				voice_str = voice_str.replace('bjanca', 'Bianca')
			
			window.biVoice.onEnd = ()=>
			{
				!myRec.recording && myRec.start() // start engine
			}
			window.biVoice.speak( voice_str )
			
			
			convo.push( {x: ansver, y: prvious_question, t: question } )
			await save_convo(convo)
			prvious_question = question
		})

		
		return myRec.resultValue
	}
}
async function bIstep (question)
{
	const Bijs = new bianka().init(question || '')
	logz(Bijs)
	logz('bijs=', Bijs)
	return await Bijs
}

window.onload = async() =>
{
	window.biVoice = new p5.Speech('Microsoft Zira Desktop - English (United States)')
	const model = bIstep
			
	async function onVoiceLoad()
	{
		window.biVoice.speak('hi there.')
		// window.biVoice.speak('Hey Kortana!!! ask My Therapist to start a new session.')
		// window.biVoice.speak('hi there. My name is Bianca.')
				
		text_in.onchange = (e)=>
		{
			logz(model(e.target.value))
		}
		var event = new Event('change');
		text_in.dispatchEvent(event);
	}
	window.biVoice.onLoad = onVoiceLoad
	//setTimeout( onVoiceLoad, 1000 )
}


