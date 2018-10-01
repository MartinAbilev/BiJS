const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: 'bundle01.js'
  }
};