const Product = require('../models/product');
const {fetchAllProducts} = require("../models/product");

// async function displayProductsPage(req, res, next) {
//     // Below is a representation of a Controller: We're interacting with our data and then we are returning a view
//     // this in-between logic that makes up a controller.
//     // Express doesn't send a default response so you must explicitly state it
//     // res.setHeader() <<< This is possible in Express
//     // res.write() <<< This is also possible in Express
//     // res.sendFile(path.join(rootDir, 'views', 'shop.html')); // Automatically sets a default Content-Type if not specified
//     // const products = adminRoutes.products;
//     try {
//         const products = await fetchAllProducts();
//
//         res.render('shop', {
//             pageTitle: 'Shop',
//             products: products,
//             path: '/'
//         });
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Internal Server Error');
//     }
// }

async function getProducts (req, res, next) {
    try {
        const products = await fetchAllProducts();

        res.render('shop/product-list', {
            pageTitle: 'All Products',
            products: products,
            path: '/products'
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};


async function getIndex (req, res, next) {
    try {
        const products = await fetchAllProducts();

        res.render('shop/index', {
            pageTitle: 'Shop',
            products: products,
            path: '/'
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

function getCart (req, res, next) {
    res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart'
    });
};

function getOrders (req, res, next) {
    res.render('shop/orders', {
        path: '/orders',
        pageTitle: 'Your Orders'
    });
};

function getCheckout (req, res, next) {
    res.render('shop/checkout', {
        path: '/checkout',
        pageTitle: 'Checkout'
    });
};

module.exports = { getProducts, getIndex, getCart, getOrders, getCheckout }