const express = require("express");
const router = express.Router();
const loggerController = require("../controllers/loggerController");

router.get("/read", loggerController.showAll);
router.post("/add", loggerController.addLogger);
router.delete("/delete/:id", loggerController.deleteLogger);
router.put("/edit/:id", loggerController.editLogger);
module.exports = router;
