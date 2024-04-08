const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.json({mssg: 'GET request to the homepage'});
});

router.get('/about-us', (req, res) => {
    res.json({mssg: 'GET request to the about page'});
});

router.get('/events', (req, res) => {
    res.json({mssg: 'GET request to the about page'});
});

router.get('/blogs', (req, res) => {
    res.json({mssg: 'GET request to the about page'});
});

module.exports = router;