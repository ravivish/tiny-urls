const express = require('express');
const api = require('./api');
const urls = require('./urlsdata');

const app = express();

const port = process.env.PORT || 3001;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/api', api);

// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));

app.get('/:id', (req, res) => {
    const hasUrl = urls.filter((i) => i.id === req.params.id);
    if (hasUrl) {
        res.redirect(hasUrl[0].url);
    } else {
        res.status(404).send({ error: 'No url found' });
    }
});

app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Example app listening at http://localhost:${port}`);
});
