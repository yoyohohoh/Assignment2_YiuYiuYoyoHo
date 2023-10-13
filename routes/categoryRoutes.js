//3d. Define the routes for handling all CRUD operations listed below.
var express = require('express');
var router = express.Router();

let CategoryController = require('../controllers/categoryController')



router.get('/categories', CategoryController.getAllCategories);
router.get('/categories/:id', CategoryController.getCategoryById, CategoryController.read);
router.post('/categories', CategoryController.addCategory);
router.put('/categories/:id', CategoryController.updateCategoryById);
router.delete('/categories/:id', CategoryController.removeCategoryById);



module.exports = router;
