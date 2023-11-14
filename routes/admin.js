const express = require('express');

const router = express.Router();

// The middleware use method can be used after we create the app object but before we passed it to create server
// We can then use the app and call a method "use" which is defined by the express framework
// and allows us to add a new middleware function
router.get('/add-product', (req, res, next) => {
    console.log('In the first middleware');

    // Allows the request to continue to the next middleware in the line.
    // If a response is sent in this current middleware, the next middleware doesn't fire off. Don't call next()!
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button>Add Product</button></form>')
});

// A route method is derived from one of the HTTP methods, and is attached to an instance of the express class.
// Express supports methods that correspond to all HTTP request methods: get, post, put, delete, all
router.post('/product', (req, res, next) => {
    // The req.body property contains key-value pairs of data submitted in the request body. By default, it is undefined
    // and is populated when you use a middleware called body-parsing such as express.urlencoded() or express.json().
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;
