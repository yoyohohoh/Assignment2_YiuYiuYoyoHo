//3c. Write the controller.
const Product = require('../models/Product');

const getAllProducts = async function (req, res, next) {
    try {
    let list = await Product.find({} , '-password -salt');
    res.json("result: " + list);
    } catch (error) {
    next(error);
    }
    }

const getProductById = async function(req, res, next) {
    try {
        let id = req.params.id; // This should be a valid ObjectId
        req.user = await Product.findOne({ _id: id }, '-password -salt');
        next();
    } catch (error) {
        console.log(error);
        next(error);
    }
};

const read = function(req, res) {
    res.json(req.user);
};

const addProduct = async function(req, res, next) {
    try {
    const newProduct = new Product(req.body);
    let result = await Product.create(newProduct);
    res.json(
    {
    success: true,
    message: "Product created sucessfully."
    }
    );
    } catch (error) {
    next(error);
    }
    };
    

const updateProductById = async (req, res, next) => {
    try {
        let id = req.params.id;
        let updatePorduct = Product(req.body);
        updatePorduct._id = id;
        let result = await Product.updateOne({ _id: id },
        updatePorduct);
        if (result.modifiedCount > 0) {
        res.json(
        {
        success: true,
        message: "Product updated sucessfully."
        }
        );
        }
        else {
        // Express will catch this on its own.
        throw new Error('Product not updated. Are you sure it exists?')
        }
        } catch (error) {
        next(error)
        }
        }
    

const removeProductById = async (req, res, next) => {
    try {
    let id = req.params.id; // Use 'id' instead of 'userId'
    let result = await Product.deleteOne({ _id: id });
    console.log("====> Result: ", result);
    if (result.deletedCount > 0) {
        res.json({
            success: true,
            message: "Product deleted successfully."
        });
    } else {
        // Express will catch this on its own.
        throw new Error('Product not deleted. Are you sure it exists?');
    }
    } catch (error) {
    console.log(error);
    next(error);
    }
    }
        
    

module.exports = {
    getAllProducts,
    getProductById,
    read,
    addProduct,
    updateProductById,
    removeProductById
};



