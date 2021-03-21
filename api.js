const express = require('express');
const urls = require('./urls');

const router = express.Router();

router.use('/urls', urls);

router.get('/', (req, res) => {
    res.send('Hello wrong end point hit api/urls/');
});

module.exports = router;
