/*
	./webpack.common.js
*/

const path = require('path'); 

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: './src/index.html', 
	inject: 'body' 
})

const CleanWebpackPluginConfig = new CleanWebpackPlugin(['public']);

const config = {
	entry: './src/index.js', 
	output: {
		path: path.resolve('./public'), 
		filename: 'bundle.js' 
	},
	module: {
		rules: [
			{
				use: 'babel-loader',
				test: /\.js$/,
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.(scss|sass)$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			}, {
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader', 'eslint-loader']
			}
		]
	},
	devServer: {
		port: 9000
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	plugins: [HtmlWebpackPluginConfig, CleanWebpackPluginConfig] 
}

module.exports = config; 