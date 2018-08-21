import express from 'express';
import webpack from 'webpack';
import webpackConfig from '../webpack.config';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
const fakeData = require('./data.json');

const app = express();

app.use(webpackDevMiddleware(webpack(webpackConfig), {}));
app.use(webpackHotMiddleware(webpack(webpackConfig)));

app.set('port', process.env.PORT || 3010)



// app.get('/', (req, res) => {
//     res.send('hello world');
// })

app.get('/api/posts', (req, res) => {
    res.json(fakeData);
})

app.get('/api/posts/:postId', (req, res) => {
    const postId = 2;
    var post = fakeData.filter(post => post._id == postId)

    res.json(post);
})

app.get('*', function(req, res) {
    res.sendFile(path.resolve(__dirname) + '/src/client/index.html');
});

app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});