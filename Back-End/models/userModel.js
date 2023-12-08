const mongoose = require("mongoose");

//1-  Create Schema
const userSchema = new mongoose.Schema(
    {
        username: { type: String, required: true },
        address: { type: String, required: true },
        email: { type: String, unique: true, required: true },
        password: { type: String, required: true },
        phoneNumber: { type: String, required: false },
    },
    {
        timestamps: true,
    }
);


//2- Created model
const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
