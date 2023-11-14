const http = require('http');
const express = require('express');

// Initialize express object and pass it in the createServer method as a valid handler
const app = express();

// The middleware use method can be used after we create the app object but before we passed it to create server
// We can then use the app and call a method "use" which is defined by the express framework
// and allows us to add a new middleware function
app.use((req, res, next) => {
    console.log('In the first middleware');
    next(); // Allows the request to continue to the next middleware in the line
});

app.use((req, res, next) => {
    console.log('In the second middleware');
})

const server = http.createServer(app);

server.listen(3000);