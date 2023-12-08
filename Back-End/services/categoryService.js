const slugify = require("slugify");
const asyncHandler = require("express-async-handler");
const ApiError = require("../utils/apiError");
const Category = require("../models/categoryModel");

// @desc   get list of Categories
// @route  GET /api/v1/categories
// @access public
exports.getCategories = asyncHandler(async (req, res) => {
  const page = req.query.page * 1 || 1;
  const limit = req.query.limit * 1 || 5;
  const skip = (page - 1) * limit;
  const categories = await Category.find({}).skip(skip).limit(limit);
  res.status(200).json({ results: categories.length, page, data: categories });
});

// @desc   get specific Category by id
// @route  GET /api/v1/categories/:id
// @access public
exports.getCategory = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const category = await Category.findById(id);
  if (!category) {
    return next(new ApiError(`No Category for this id ${id}`, 404));
  }
  res.status(200).json({ data: category });
});

// @desc   Create Category
// @route  Post /api/v1/categories
// @access private
exports.creatCategory = asyncHandler(async (req, res) => {
  const name = req.body.name;
  const category = await Category.create({ name, slug: slugify(name) });
  res.status(201).json({ data: category });
});

// @desc   Update specific Category by id
// @route  PUT /api/v1/categories/:id
// @access private
exports.updateCategory = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { name } = req.body;
  const category = await Category.findOneAndUpdate(
    { _id: id },
    { name, slug: slugify(name) },
    { new: true }
  );
  if (!category) {
    return next(new ApiError(`No Category for this id ${id}`, 404));
  }
  res.status(200).json({ data: category });
});

// @desc   Delete specific Category by id
// @route  DELETE /api/v1/categories/:id
// @access private
exports.deleteCategory = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const category = await Category.findByIdAndDelete(id);
  if (!category) {
    return next(new ApiError(`No Category for this id ${id}`, 404));
  }
  res.status(204).send();
});
