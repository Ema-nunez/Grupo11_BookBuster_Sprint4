const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController')
const upload = require('../middleware/middlemulter')



router.get('/cart', productController.cart);

router.get('/productDetail/:id', productController.detail);

router.get('/agregarProducto', productController.create);
// router.post('/agregarProducto', productController.store);

router.get('/editarProducto/:id', productController.edit)
// router.put('/editarProducto/:id', productController.update)

module.exports = router;