import webpack from 'webpack';
import htmlWebpackPlugin from 'html-webpack-plugin';
import LiveReloadPlugin from 'webpack-livereload-plugin';

export default {
    entry: {
        app: ['./src/client/index.js', 'webpack-hot-middleware/client']
    },
    output: {
        path: '/',
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
    devServer: {
        compress: true,
        hot: true,
        open: true
    },
    plugins: [
        new htmlWebpackPlugin({
            template: 'src/client/index.html'
        }),
        new LiveReloadPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
}
