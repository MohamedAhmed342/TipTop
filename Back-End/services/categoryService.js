const CategoryModel = require("../models/categoryModel");

exports.getCategories = (req, res) => {
  // const name = req.body.name;
  // console.log(req.body);
  res.send();
};

exports.creatCategory = (req, res) => {
  const name = req.body.name;
  // CategoryModel.create({ name , slug : })
  const newCategory = new categoryModel({ name });
  newCategory
    .save()
    .then((doc) => {
      res.json(doc);
    })
    .catch((err) => {
      res.json(err);
    });
};
