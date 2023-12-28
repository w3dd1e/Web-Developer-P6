const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const sauceCtrl = require("../controllers/sauce");

router.get("/api/sauces", sauceCtrl.getAllSauces);
router.get("/api/sauces/:id", sauceCtrl.getOneSauce);
router.post("/api/sauces", sauceCtrl.createSauce);
router.put("/api/sauces/:id", sauceCtrl.updateSauce);
router.delete("/api/sauces/:id", sauceCtrl.deleteSauce);

module.exports = router;
