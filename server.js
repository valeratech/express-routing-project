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

//So now we're telling express that we want to compile dynamic templates with the EJS engine and where to find these
// templates.
app.set('view engine', 'ejs');
// Default setting - Can omit the following code:
app.set('views', 'views');

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

// right, now we find that main.css file because now this path can be resolved because we request a file
// here and if I omit .css, it therefore will fail but if I add it again, this is handled by the static middleware and
// forwards the request to the public folder.
// Express looks up the files relative to the static directory,
// so the name of the static directory is not part of the URL - meaning you don't have to specify '/public'.
app.use(express.static(path.join(__dirname, 'public')));

// The root / will always be a catch-all for request when the .use method is called since it handles all http methods.
// If we have a middleware that should be applied to all requests, we would simply add it on top of all the other
// middleware. If we don't add a filter (a specific URL) or a filter that matches all requests then this middleware will
// always run first. Calling the next function allows the request to be able to continue.


// Order will matter when specifying .get over .use in your Router() functions
// Only routes starting with /admin will go into the admin routes file and will also omit or ignore '/admin' portion
// in the url when it tries to match these routes, so now /add-product will match the /admin/add-product route because
// /admin was already stripped out

// So this filtering mechanism here in app.js allows us to put a common starting segment for our path which all routes
// in a given file use to outsource that into this app.js file so that we don't have to repeat it for all the routes
// in our routes .js files middleware functions.
app.use('/admin', adminRoutes.routes);

app.use(shopRoutes);

// Catch all routes that aren't specified and redirect to 404.html
app.use((req, res, next) => {
    // res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
    res.status(404).render('404', {pageTitle: 'Page Not Found'})
})


// This method does the same as the 2 lines below it
app.listen(3005);

// const server = http.createServer(app);
// server.listen(3000);