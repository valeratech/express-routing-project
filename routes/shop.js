const express = require('express');
const path = require('path');
const rootDir = require('../util/path');

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log('Home Page');

    // Express doesn't send a default response so you must explicitly state it
    // res.setHeader() <<< This is possible in Express
    // res.write() <<< This is also possible in Express
    res.sendFile(path.join(rootDir, 'views', 'shop.html')); // Automatically sets a default Content-Type if not specified
})

module.exports = router;

