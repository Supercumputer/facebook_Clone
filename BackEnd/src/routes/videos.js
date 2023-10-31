const express = require("express");
const router = express.Router();

const VideoController = require('../Controllers/VideoController')

router.get("/", VideoController.getAllVideo);
router.get("/:id", VideoController.showAllVideo);


module.exports = router;