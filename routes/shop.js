const express = require('express');
const productsController = require("../controllers/products");

const router = express.Router();

// Data is controlled and displayed in a controllers directory by implementing MVC
router.get('/', productsController.displayProducts);

module.exports = router;