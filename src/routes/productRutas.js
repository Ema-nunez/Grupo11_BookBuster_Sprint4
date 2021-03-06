const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController')
const upload = require('../middleware/middlemulter')



router.get('/cart', productController.cart);

router.get('/productDetail/:id', productController.detail);

router.get('/agregarProducto', productController.create);
router.post('/agregarProducto', upload.single("portada"), productController.store);

router.get('/edit/:id', productController.edit)

router.put('/edit/:id', productController.update)

router.post("/delete/:id", productController.eliminar)
module.exports = router;