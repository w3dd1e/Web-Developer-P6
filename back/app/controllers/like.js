const Sauce = require("../models/sauce");

exports.updateLike = (req, res, next) => {
  let like = req.body.like;
  let user = req.body.userId;

  Sauce.findOne({ _id: req.params.id }).then((sauce) => {
    let totalLiked = sauce.usersLiked.length;
    let totalDisliked = sauce.usersDisliked.length;

    if (like === 1 && !sauce.usersLiked.includes(user)) {
      totalLiked++;
      sauce = {
        $push: { usersLiked: user },
        likes: totalLiked,
      };
    } else if (like === -1 && !sauce.usersDisliked.includes(user)) {
      totalDisliked++;
      sauce = {
        $push: { usersDisliked: user },
        dislikes: totalDisliked,
      };
    } else if (like === 0 && sauce.usersLiked.includes(user)) {
      totalLiked--;
      sauce = {
        $pull: { usersLiked: user },
        likes: totalLiked,
      };
    } else if (like === 0 && sauce.usersDisliked.includes(user)) {
      totalDisliked--;
      sauce = {
        $pull: { usersDisliked: user },
        dislikes: totalDisliked,
      };
    }
    Sauce.updateOne({ _id: req.params.id }, sauce)
      .then(() => {
        res.status(201).json({
          message: "Like updated successfully!",
        });
      })
      .catch((error) => {
        console.log(error);
        res.status(400).json({
          error: error,
        });
      });
  });
};
