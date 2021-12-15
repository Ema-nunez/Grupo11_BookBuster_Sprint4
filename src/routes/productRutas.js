const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController')

router.get('/cart', productController.cart);

router.get('/productDetail', productController.productDetail);

router.get('/agregarProducto', productController.agregarProducto)

router.get('/editarProducto', productController.editarProducto)

module.exports = router;