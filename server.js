// const http = require('http');
const express = require('express');
const bodyParser = require("body-parser");
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const path = require('path');
const rootDir = require('./util/path');

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

// The root / will always be a catch-all for request when the .use method is called since it handles all http methods.
// If we have a middleware that should be applied to all requests, we would simply add it on top of all the other
// middleware. If we don't add a filter (a specific URL) or a filter that matches all requests then this middleware will
// always run first. Calling the next function allows the request to be able to continue.


// Order will matter when specifying .get over .use in your Router() functions
app.use('/admin', adminRoutes);

app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
})


// This method does the same as the 2 lines below it
app.listen(3005);

// const server = http.createServer(app);
// server.listen(3000);