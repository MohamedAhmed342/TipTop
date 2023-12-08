const mongoose = require("mongoose");

//1-  Create Schema
const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Category Required"],
      unique: [true, "Category must be unique"],
      minlength: [3, "Too Short Category Name"],
      maxlength: [32, "Too Long Category Name"],
    },
    typecategorey: String,
    //A And B ==> shopping.com/a-and-b
    slug: {
      type: String,
      lowercase: true,
    },
    image: String,
  },
  { timestamps: true }
);

//2- Created model
const categoryModel = mongoose.model("Category", categorySchema);

module.exports = categoryModel;
