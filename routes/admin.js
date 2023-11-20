
const express = require('express');
const path = require('path');
const rootDir = require('../util/path');

const router = express.Router();

const products = [];

// The middleware use method can be used after we create the app object but before we passed it to create server
// We can then use the app and call a method "use" which is defined by the express framework
// and allows us to add a new middleware function

// We can use the same path but only with different METHODS (ex. GET | POST)
router.get('/add-product', (req, res, next) => {
    // Allows the request to continue to the next middleware in the line.
    // If a response is sent in this current middleware, the next middleware doesn't fire off. Don't call next()!
    // next();

    // The OS filesystem absolute path is required and can be achieved with the path module
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    res.render('add-product', {
        pageTitle: 'Add Product'
    });
});

// A route method is derived from one of the HTTP methods, and is attached to an instance of the express class.
// Express supports methods that correspond to all HTTP request methods: get, post, put, delete, all
router.post('/add-product', (req, res, next) => {
    // The req.body property contains key-value pairs of data submitted in the request body. By default, it is undefined
    // and is populated when you use a middleware called body-parsing such as express.urlencoded() or express.json().
    console.log(req.body);
    products.push({title: req.body.title});
    res.redirect('/');
});

// Alternate Methods of Exporting
module.exports = {
    routes : router,
    products : products
}

// module.exports = router;

// exports.routes = router;
// exports.products = products;