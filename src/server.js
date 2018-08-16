import express from 'express';
import webpack from 'webpack';
import webpackConfig from '../webpack.config';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

const app = express();

app.use(webpackDevMiddleware(webpack(webpackConfig), {}));
app.use(webpackHotMiddleware(webpack(webpackConfig)));

app.set('port', process.env.PORT || 3010)


app.get('/', (req, res) => {
    res.send('hello world');
})

app.get('/api', (req, res) => {
    res.json({ api: 'works' })
})

app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});