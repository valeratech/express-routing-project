// const http = require('http');
const express = require('express');
const bodyParser = require("body-parser");

// https://github.com/expressjs/express/tree/master/lib
// Initialize express object and pass it in the createServer method as a valid handler
const app = express();

// Request doesn't try to parse the incoming request body by default. We need to register a parser by adding another
// parser middleware. Typically, you need to do this FIRST before your route handling middlewares because the parsing
// of the body should be done no matter where your request ends up

// The `body-parser` module provides a variety of options for parsing different types of data. In this case, we use the
// `urlencoded` method with the `extended` option set to `false`. This configuration enables the parsing of URL-encoded
// form data and populates the `req.body` object with the parsed data.

// The extended option allows to choose between parsing the URL-encoded data with the querystring library (when false)
//  or the qs library (when true). The “extended” syntax allows for rich objects and arrays to be encoded into the
//  URL-encoded format, allowing for a JSON-like experience with URL-encoded. The extended key defaults to true, but
//  using the default has been deprecated.
app.use(bodyParser.urlencoded({extended: false}))

// The root / will always be a catch-all for request. If we have a middleware that should be applied to all requests,
// we would simply add it on top of all the other middleware. If we don't add a filter (a specific URL) or a filter
// that matches all requests then this middleware will always run first. Calling the next function allows the request
// to be able to continue.

// The middleware use method can be used after we create the app object but before we passed it to create server
// We can then use the app and call a method "use" which is defined by the express framework
// and allows us to add a new middleware function
app.use('/add-product', (req, res, next) => {
    console.log('In the first middleware');

    // Allows the request to continue to the next middleware in the line.
    // If a response is sent in this current middleware, the next middleware doesn't fire off. Don't call next()!
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button>Add Product</button></form>')
});

// A route method is derived from one of the HTTP methods, and is attached to an instance of the express class.
// Express supports methods that correspond to all HTTP request methods: get, post, put, delete, all
app.post('/product', (req, res, next) => {
    // The req.body property contains key-value pairs of data submitted in the request body. By default, it is undefined
    // and is populated when you use a middleware called body-parsing such as express.urlencoded() or express.json().
    console.log(req.body);
    res.redirect('/');
})

app.use('/', (req, res, next) => {
    console.log('Home Page');

    // Express doesn't send a default response so you must explicitly state it
    // res.setHeader() <<< This is possible in Express
    // res.write() <<< This is also possible in Express
    res.send('<h1>Hello World</h1>') // Automatically sets a default Content-Type if not specified
})


// This method does the same as the 2 lines below it
app.listen(3000);

// const server = http.createServer(app);
// server.listen(3000);