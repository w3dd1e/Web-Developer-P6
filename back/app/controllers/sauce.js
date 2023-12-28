const Sauce = require("../models/sauce");

exports.getAllSauces = (req, res, next) => {
  Sauce.find()
    .then((sauces) => {
      console.log("Sauces found: ", sauces);
      res.status(200).json(things);
    })
    .catch((error) => {
      res.status(400).json({
        error: "Error retrieving sauces from database",
      });
    });
};
