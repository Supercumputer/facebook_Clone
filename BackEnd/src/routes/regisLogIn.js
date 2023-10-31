const express = require("express");
const router = express.Router();

const RegisLogIn = require('../Controllers/RegisLogInController')

router.post("/login", RegisLogIn.loginUser);
router.post("/register", RegisLogIn.registerUser);
router.get("/logout", RegisLogIn.logoutUser);

module.exports = router;
