const Sauce = require("../models/sauce");

exports.updateLike = (req, res, next) => {
  sauce = findOne({ _id: req.params.id });
  userId = req.body.userId;
  like = req.body.like;

  sauce
    .updateOne({ _id: req.params.id }, like, usersLiked.push(userId))
    .then(() => {
      res.status(201).json({
        message: "Likes updated successfully!",
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({
        error: error,
      });
    });
};
