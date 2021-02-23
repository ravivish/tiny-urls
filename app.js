const express = require('express');
// const bodyParser = require('body-parser');
const api = require('./api');

const app = express();

const port = process.env.port || 3000;

app.use(express.json());

// app.use(bodyParser);

app.use(express.urlencoded({ extended: true }));

app.use('/api', api);

// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello world');
});
app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Example app listening at http://localhost:${port}`);
});
