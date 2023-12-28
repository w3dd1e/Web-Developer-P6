const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");
const sauceCtrl = require("../controllers/sauce");

router.get("/api/sauces", auth, sauceCtrl.getAllSauces);
router.get("/api/sauces/:id", auth, sauceCtrl.getOneSauce);
router.post("/api/sauces", auth, multer, sauceCtrl.createSauce);
router.put("/api/sauces/:id", auth, multer, sauceCtrl.updateSauce);
router.delete("/api/sauces/:id", auth, sauceCtrl.deleteSauce);

module.exports = router;
