const express = require("express");
const router = express.Router();
const uploadCloud = require('../config/cloudinary.config')

const PostController = require('../Controllers/PostController')

router.get("/", PostController.getAllPost);
router.post('/:id', uploadCloud.single('image'), PostController.upPost)

module.exports = router;