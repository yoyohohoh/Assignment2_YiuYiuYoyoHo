//3c. Write the controller.
const Category = require('../models/Category');



const getAllCategories = async function (req, res, next) {
    try {
            const list = await Category.find({}, '-password -salt');
            res.json("result: " + list);

    } catch (error) {
        next(error);
    }
}



   


const getCategoryById = async function(req, res, next) {
    try {
        let id = req.params.id; // This should be a valid ObjectId
        req.user = await Category.findOne({ _id: id }, '-password -salt');
        next();
    } catch (error) {
        console.log(error);
        next(error);
    }
};

const read = function(req, res) {
    res.json(req.user);
};

const addCategory = async function(req, res, next) {
    try {
    const newCategory = new Category(req.body);
    let result = await Category.create(newCategory);
    res.json(
    {
    success: true,
    message: "Category created sucessfully."
    }
    );
    } catch (error) {
    next(error);
    }
    };
    

const updateCategoryById = async (req, res, next) => {
    try {
        let id = req.params.id;
        let updatePorduct = Category(req.body);
        updatePorduct._id = id;
        let result = await Category.updateOne({ _id: id },
        updatePorduct);
        if (result.modifiedCount > 0) {
        res.json(
        {
        success: true,
        message: "Category updated sucessfully."
        }
        );
        }
        else {
        // Express will catch this on its own.
        throw new Error('Category not updated. Are you sure it exists?')
        }
        } catch (error) {
        next(error)
        }
        }
    

const removeCategoryById = async (req, res, next) => {
    try {
    let id = req.params.id; // Use 'id' instead of 'userId'
    let result = await Category.deleteOne({ _id: id });
    console.log("====> Result: ", result);
    if (result.deletedCount > 0) {
        res.json({
            success: true,
            message: "Category deleted successfully."
        });
    } else {
        // Express will catch this on its own.
        throw new Error('Category not deleted. Are you sure it exists?');
    }
    } catch (error) {
    console.log(error);
    next(error);
    }
    }


 

    

module.exports = {
    getAllCategories,
    getCategoryById,
    read,
    addCategory,
    updateCategoryById,
    removeCategoryById, 
};



