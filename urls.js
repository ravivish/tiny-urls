const express = require('express');
const { nanoid } = require('nanoid');

const urls = require('./urlsdata');

const router = express.Router();

// Get list of all urls
router.get('/', (req, res) => {
    res.status(200).send(urls);
});

// create short urls
router.post('/', (req, res) => {
    const shortid = nanoid(10);
    const { url } = req.body;
    urls.push({ id: shortid, url });
    res.status(201).send({ id: shortid, url });
});

// To redirct the url if available
router.get('/:id', (req, res) => {
    const hasUrl = urls.filter((i) => i.id === req.params.id);
    if (hasUrl) {
        res.redirect(hasUrl[0].url);
    } else {
        res.status(404).send({ error: 'No url found' });
    }
});

module.exports = router;
