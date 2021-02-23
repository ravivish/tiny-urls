const express = require('express');
const { nanoid } = require('nanoid');

const urls = require('./urlsdata');

const router = express.Router();

router.get('/', (req, res) => {
    // const data = [];
    // Object.keys(urls).forEach((id) => {
    //     data.push({ id, url: urls[id].url });
    // });
    res.status(200).send(urls);
});
router.post('/', (req, res) => {
    const shortid = nanoid(10);
    const urldata = req.body.url;
    console.log(req.body);
    urls.push({ id: shortid, url: urldata });
    res.status(201).send({ id: shortid, url: urldata });
});

router.get('/:id', (req, res) => {
    const hasUrl = urls[req.params.id];
    if (hasUrl) {
        res.redirect(hasUrl);
    } else {
        res.status(404).send({ error: 'No url found' });
    }
});

module.exports = router;
