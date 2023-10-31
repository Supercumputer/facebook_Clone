const express = require("express");
const router = express.Router();

const UserController = require('../Controllers/UserController')

router.get("/:id", UserController.getUser);
router.get('/friend/:id', UserController.getFriend)
router.get("/AllUser", UserController.getAllUser)
router.get("/AllUser", UserController.getAllUser)
router.post("/upDateUser/:id", UserController.upDateUser)
router.delete("/deleteUser/:id", UserController.deleteUser)

module.exports = router;