const express = require("express");

const {
  getCategories,
  creatCategory,
  getCategory,
  updateCategory,
  deleteCategory,
} = require("../services/categoryService");

const router = express.Router();

// Routes
// router.get("/", getCategories);
// router.post("/", creatCategory);
router.route("/").get(getCategories).post(creatCategory);
router
  .route("/:id")
  .get(getCategory)
  .put(updateCategory)
  .delete(deleteCategory);

module.exports = router;
