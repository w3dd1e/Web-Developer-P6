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

exports.getOneSauce = (req, res, next) => {
  Sauce.findOne({
    _id: req.params.id,
  })
    .then((thing) => {
      res.status(200).json(sauce);
    })
    .catch((error) => {
      res.status(404).json({
        error: error,
      });
    });
};

exports.createSauce = (req, res, next) => {
  const sauce = new Sauce({
    userid: req.body.userid,
    name: req.body.name,
    manufacturer: req.body.manufacturer,
    description: req.body.description,
    mainPepper: req.body.mainPepper,
    imageURL: req.body.imageURL,
    heat: req.body.heat,
  });
  sauce
    .save()
    .then(() => {
      res.status(201).json({
        message: "Post saved successfully!",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

exports.updateSauce = (req, res, next) => {
  const sauce = new Sauce({
    /* 
        TODO: Update the following fields for sauce model:
         _id: req.params.id,
          title: req.body.title,
          description: req.body.description,
          imageUrl: req.body.imageUrl,
          price: req.body.price,
          userId: req.body.userId */
  });
  Sauce.updateOne({ _id: req.params.id }, sauce)
    .then(() => {
      res.status(201).json({
        message: "Thing updated successfully!",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

exports.deleteSauce = (req, res, next) => {
  Sauce.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200).json({
        message: "Deleted!",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};
