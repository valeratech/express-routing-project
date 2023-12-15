const adminRoutes = require("../routes/admin");
const { createProduct, fetchAllProducts } = require('../models/product');

async function getAddProducts(req, res, next) {
    try {
        const products = await fetchAllProducts();
        // Allows the request to continue to the next middleware in the line.
        // If a response is sent in this current middleware, the next middleware doesn't fire off. Don't call next()!
        // next();

        // The OS filesystem absolute path is required and can be achieved with the path module
        // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
        res.render('admin/add-product', {
            products,
            pageTitle: 'Add Product',
            path: '/admin/add-product',
            formsCSS: true,
            productCSS: true,
            activeAddProduct: true
        });
        } catch (error) {
            res.status(500).send('Internal Server Error');
    }
}

// Asynchronous functions are used in the code below to handle operations that involve I/O (input/output) or potentially
// time-consuming tasks without blocking the execution of the rest of the program.
async function postAddProducts(req, res, next) {
    // The req.body property contains key-value pairs of data submitted in the request body. By default, it is undefined
    // and is populated when you use a middleware called body-parsing such as express.urlencoded() or express.json().
    // products.push({title: req.body.title});
    try {
        const title = req.body.title;
        const imageUrl = req.body.imageUrl;
        const description = req.body.description;
        const price = req.body.price;

        const product = createProduct(title, imageUrl, description, price);
        await product.save();
        res.redirect('/');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

async function getProducts (req, res, next) {
    // Product.fetchAll(products => {
    //     res.render('admin/products', {
    //         prods: products,
    //         pageTitle: 'Admin Products',
    //         path: '/admin/products'
    //     });
    // });
    try {
        const products = await fetchAllProducts();
        // Allows the request to continue to the next middleware in the line.
        // If a response is sent in this current middleware, the next middleware doesn't fire off. Don't call next()!
        // next();

        // The OS filesystem absolute path is required and can be achieved with the path module
        // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
        res.render('admin/add-product', {
            products,
            pageTitle: 'Add Product',
            path: '/admin/products',
        });
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
};

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


module.exports = { getAddProducts, postAddProducts };