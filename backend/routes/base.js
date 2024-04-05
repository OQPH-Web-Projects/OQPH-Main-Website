const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.json({mssg: 'GET request to the homepage'});
});

router.post('/', (req, res) => {
    res.json({mssg: 'POST request to the homepage'});
});

router.get('/about-us', (req, res) => {
    res.json({mssg: 'GET request to the about page'});
});

module.exports = router;