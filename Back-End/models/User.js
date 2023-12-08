const mongoose = require("mongoose");
//1-  Create Schema
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Category Required"],
      unique: [true, "Category must be unique"],
      minlength: [3, "Too Short Category Name"],
      maxlength: [32, "Too Long Category Name"],
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

//2- Created model
module.exports = mongoose.model("User", UserSchema);

