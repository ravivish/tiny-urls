const express = require('express');
const { nanoid } = require('nanoid');

const urls = require('./urlsdata');

const router = express.Router();

router.get('/', (req, res) => {
    const data = [];
    Object.keys(urls).forEach((id) => {
        // console.log(urls[id]);
        data.push({ id, url: urls[id] });
    });
    res.status(200).send(data);
});
router.post('/', (req, res) => {
    const id = nanoid(10);
    const { url } = req.body;
    urls[id] = url;
    res.status(201).send({ id, url });
});

router.get('/:id', (req, res) => {
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
