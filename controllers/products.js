const adminRoutes = require("../routes/admin");
const products = [];

// Alternate method of exporting:
// exports.getAddProducts() {}

function getAddProducts (req, res, next) {
    // Allows the request to continue to the next middleware in the line.
    // If a response is sent in this current middleware, the next middleware doesn't fire off. Don't call next()!
    // next();

    // The OS filesystem absolute path is required and can be achieved with the path module
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product'
    });
}

function postAddProducts (req, res, next) {
    // The req.body property contains key-value pairs of data submitted in the request body. By default, it is undefined
    // and is populated when you use a middleware called body-parsing such as express.urlencoded() or express.json().
    console.log(req.body);
    products.push({title: req.body.title});
    res.redirect('/');
}

function displayProducts(req, res, next) {
    // Below is a representation of a Controller: We're interacting with our data and then we are returning a view
    // this in-between logic that makes up a controller.
    // Express doesn't send a default response so you must explicitly state it
    // res.setHeader() <<< This is possible in Express
    // res.write() <<< This is also possible in Express
    // res.sendFile(path.join(rootDir, 'views', 'shop.html')); // Automatically sets a default Content-Type if not specified
    res.render('shop', {
        pageTitle: 'Shop',
        products: products,
        path: '/'
    });
}

module.exports = {getAddProducts, postAddProducts, displayProducts};