const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log('Home Page');

    // Express doesn't send a default response so you must explicitly state it
    // res.setHeader() <<< This is possible in Express
    // res.write() <<< This is also possible in Express
    res.send('<h1>Hello World</h1>') // Automatically sets a default Content-Type if not specified
})

module.exports = router;

