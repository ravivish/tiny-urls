const express = require('express');
const nanoid = require('nanoid');
const urls = require('./urlsdata');

const router = express.Router();

router.get('/urls', (req, res) => {
    const data = {};
    Object.keys(urls).forEach((id) => {
        data[id] = urls.long_urls;
    });
    res.status(200).send(data);
});
router.post('/urls', (req, res) => {
    const shortid = nanoid();
    const { url } = req.params.url;
    urls[shortid] = url;
    res.status(201).send({ shortid, url });
});

router.get('/urls/:id', (req, res) => {
    const hasUrl = urls[req.params.id];
    if (hasUrl) {
        res.redirect(hasUrl);
    } else {
        res.status(404).send({ error: 'No url found' });
    }
});

// router.get('/', (req, res) => {
//     res.send('Hi');
// });

module.exports = router;
