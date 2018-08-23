/*
	./webpack.common.js
*/

const path = require('path'); // path utility

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// init HTML Webpack Plugin
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: './src/index.html', // archivo de nuestra vista
	inject: 'body' // donde insertaremos nuestro script
})
// init Clean Webpack Plugin
const CleanWebpackPluginConfig = new CleanWebpackPlugin(['public']);

const config = {
	entry: './src/index.js', // archivo js que codearemos
	output: {
		path: path.resolve('./public'), //resolver el path de salida
		filename: 'bundle.js' // archivo js compilado
	},
	module: {
		rules: [
			{
				use: 'babel-loader',
				test: /\.js$/,
				exclude: /node_modules/
			},
			{
				use: ['style-loader', 'css-loader'],
				test: /\.css$/
			},
			{
				test: /\.(scss|sass)$/,
				use: ['style-loader','css-loader', 'sass-loader']
			}, {
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	plugins: [HtmlWebpackPluginConfig, CleanWebpackPluginConfig] // configuración de nuestra vista
}

module.exports = config; //exportamos a webpack nuestra configuración