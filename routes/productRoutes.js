//3d. Define the routes for handling all CRUD operations listed below.
var express = require('express');
var router = express.Router();

let productController = require('../controllers/productController')

router.get('/products', productController.getAllProducts);
router.get('/products/:id', productController.getProductById, productController.read);
router.post('/products', productController.addProduct);
router.put('/products/:id', productController.updateProductById);
router.delete('/products/:id', productController.removeProductById);

module.exports = router;
