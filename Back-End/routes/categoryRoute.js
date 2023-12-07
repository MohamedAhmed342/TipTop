const express = require("express");

const { getCategories } = require("../services/categoryService");

const router = express.Router();

// Routes
router.get("/", getCategories);

module.exports = router;
