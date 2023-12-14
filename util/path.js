const path = require('path');

// Create and export a path utility to start where the main/root node file is located
// The important thing is that you might get a deprecation warning for that code - in that case, you can simply switch to this code:
module.exports = path.dirname(require.main.filename);
// module.exports = path.dirname(process.mainModule.filename);