const express = require('express');
const shopController = require('../controllers/shop');

// Data is controlled and displayed in a controllers directory by implementing MVC

const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

// So if you had a dynamic segment " : " and a specific route, you would have to put the more specific route first
router.get('/products/:productId');

router.get('/cart', shopController.getCart);

router.get('/orders', shopController.getOrders);

router.get('/checkout', shopController.getCheckout);

module.exports = router;