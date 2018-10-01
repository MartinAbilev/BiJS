var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
var cmd = require('node-cmd');
var fs = require('fs');
var app = null;

var multer = require('multer'),
	storage = multer.diskStorage({
		destination: function (req, file, next) {
			next(null, './public/datasets')
		},
		filename: function (req, file, next) {
			//    console.log('SAVR FILRX: ', file, next)
			next(null, file.fieldname)
		}
	}),
	upload = multer({ storage: storage }),
	fUpload = upload.fields([{ name: 'model.json', maxCount: 1 }, { name: 'model.weights.bin', maxCount: 1 }]), app = express();

	app.use(function(req, res, next)
	{
		if (req.secure)
		{
			next();
		} else {
			res.redirect('https://' + req.headers.host + req.url);
		}
	});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json({ limit: '50mb' }));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(function(req, res, next)
{
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.use(express.static(path.join(__dirname, 'public')));

//gets n posts
app.get('/restart', function (req, res) {
	// cmd.run('git pull');

	cmd.get(
		'git stash | git pull',
		function (err, data, stderr) {
			console.log('git log :\n\n', data)
			res.send('restarting server .. please refersh page soon ... :\n\n' + data);
		}
	);
});

/**
 * Upload routing.
 * Update form data. Upload file using multer.
 */
app.post('/upload', fUpload, function (req, res, next) {
	// Field data
	console.log(req.body);
	// File details
	console.log(req.files);

	// Error handling
	fUpload(req, res, function (err) {
		if (err) {
			console.log("An error occurred when uploading");
		} else {
			res.send("model data saved!");
		}
	});
});

app.post('/convo', function (req, res, next) {
	const body = req.body;
	fs.writeFileSync('./public/datasets/convo.json', JSON.stringify(body, null, 2))
	res.send({'ok': true, body: body});
});
app.post('/wl', function (req, res, next) {
	const body = req.body;
	fs.writeFileSync('./public/datasets/wla.json', JSON.stringify(body, null, 2))
	res.send({'ok': true, body: body});
});

app.put('/upload/*', function (req, res, next) {
	const body = req.body;
	res.send({'ok': true, body: JSON.stringify(body, null, 2)});
});

module.exports = app;
