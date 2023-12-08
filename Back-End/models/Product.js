const mongoose = require("mongoose");
//1-  Create Schema
const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Category Required"],
      unique: [true, "Category must be unique"],
      minlength: [3, "Too Short Category Name"],
      maxlength: [32, "Too Long Category Name"],
    },
    desc: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    categories: {
      type: Array,
      required: true,
    },

    size: {
      type: String,
    },

    color: {
      type: String,
    },

    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

//2- Created model
module.exports = mongoose.model("Product", ProductSchema);
