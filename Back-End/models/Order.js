const mongoose = require("mongoose");
//1-  Create Schema
const OrderSchema = new mongoose.Schema(
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
    amount: { type: Number, required: true },
    address: { type: String, required: true },
    status: { type: String, default: "Pending" },
  },
  { timestamps: true }
);

//2- Created model
module.exports = mongoose.model("Order", OrderSchema);
