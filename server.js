// const http = require('http');
const express = require('express');

// https://github.com/expressjs/express/tree/master/lib
// Initialize express object and pass it in the createServer method as a valid handler
const app = express();

// The middleware use method can be used after we create the app object but before we passed it to create server
// We can then use the app and call a method "use" which is defined by the express framework
// and allows us to add a new middleware function
app.use((req, res, next) => {
    console.log('In the first middleware');

    // Allows the request to continue to the next middleware in the line.
    // If a response is sent in this current middleware, the next middleware doesn't fire off
    next();
});

app.use((req, res, next) => {
    console.log('In the second middleware');

    // Express doesn't send a default response so you must explicitly state it
    // res.setHeader() <<< This is possible in Express
    // res.setHeader() <<< This is also possible in Express
    res.send() // Automatically sets a default Content-Type if not specified
})


// This method does the same as the 2 lines below it
app.listen(3000);

// const server = http.createServer(app);
// server.listen(3000);