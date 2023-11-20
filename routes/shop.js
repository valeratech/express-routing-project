const express = require('express');
const path = require('path');
const rootDir = require('../util/path');
const adminRoutes = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
    const products = adminRoutes.products
    // Express doesn't send a default response so you must explicitly state it
    // res.setHeader() <<< This is possible in Express
    // res.write() <<< This is also possible in Express
    // res.sendFile(path.join(rootDir, 'views', 'shop.html')); // Automatically sets a default Content-Type if not specified
    res.render('shop', {
        pageTitle: 'Shop',
        products: products,
        path: '/'
    });
})

module.exports = router;

