const path = require('path');

// The important thing is that you might get a deprecation warning for that code - in that case, you can simply switch to this code:
module.exports = path.dirname(require.main.filename);
// module.exports = path.dirname(process.mainModule.filename);