const express = require("express");
const router = express.Router();
const likeCtrl = require("../controllers/like");

const auth = require("../middleware/auth");

//Authorization required to access this route
router.post("/api/sauces/:id/like", auth, likeCtrl.updateLike);

module.exports = router;
