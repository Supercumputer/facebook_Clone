const express = require("express");
const router = express.Router();

const RegisLogIn = require('../Controllers/RegisLogInController')

router.post("/login", RegisLogIn.login);
router.post("/register", RegisLogIn.register);


module.exports = router;
