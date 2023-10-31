const express = require("express");
const router = express.Router();
const { checkToken } = require("../middleware/jwtAction");
const UserController = require("../Controllers/UserController");

router.use("*", checkToken);
router.get("/getacount", UserController.getAcount);
router.get("/:id", UserController.getUser);
router.get("/friend/:id", UserController.getFriend);
router.get("/alluser", UserController.getAllUser);
router.put("/upDateUser/:id", UserController.updateUser);
router.delete("/deleteUser/:id", UserController.deleteUser);
router.patch("/restoruser/:id", UserController.restorUser);
router.delete("/deleteSoftUser/:id", UserController.deleteSoftUser);
router.get("/getalltrashuser", UserController.getAllTrashUser);

module.exports = router;
