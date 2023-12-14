const express = require('express');
const productsController = require('../controllers/products');

const router = express.Router();

// data is controlled and displayed in a controllers directory by implementing MVC
// const products = productsController.products

// We can use the same path but only with different METHODS (ex. GET | POST)
router.get('/add-product', productsController.getAddProducts);

// A route method is derived from one of the HTTP methods, and is attached to an instance of the express class.
// Express supports methods that correspond to all HTTP request methods: get, post, put, delete, all
router.post('/add-product', productsController.postAddProducts);

// Alternate Methods of Exporting
module.exports = {
    routes : router
}

// module.exports = router;

// exports.routes = router;
// exports.products = products;