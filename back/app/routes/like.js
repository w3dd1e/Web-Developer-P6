const express = require("express");
const router = express.Router();
const likeCtrl = require("../controllers/like");

const auth = require("../middleware/auth");

router.post("/api/sauces/:id/like", auth, likeCtrl.updateLike);

module.exports = router;
