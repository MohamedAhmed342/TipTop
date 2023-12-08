const mongoose = require("mongoose");
//1-  Create Schema
const CartSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: [true, "Category Required"],
    },
    products: [ 
      {
        productId: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
  },
  { timestamps: true }
);

//2- Created model
module.exports = mongoose.model("Cart", CartSchema);
