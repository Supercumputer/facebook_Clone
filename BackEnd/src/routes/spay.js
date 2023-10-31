const express = require("express");
const router = express.Router();

const SpayController = require('../Controllers/SpayController')

router.get("/", SpayController.getNewSpay);


module.exports = router;