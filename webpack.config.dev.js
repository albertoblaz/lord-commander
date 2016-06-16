/* eslint-disable */
var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer')

var config = {
	devtool: 'cheap-module-eval-source-map',
	entry: [
		'webpack-hot-middleware/client',
		'./src/main.js'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/dist/'
	},
	module: {
		loaders: [{
			test: /\.js$/,
			loaders: ['babel'],
			exclude: /node_modules/
		}, {
			test: /\.scss$/,
			loaders: ['style', 'css', 'sass', 'postcss']
		}, {
			test: /\.svg$/,
			loaders: ['svg-inline'],
		}]
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	postcss: function () {
		return [autoprefixer]
	}
};

module.exports = config;
