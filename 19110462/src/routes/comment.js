const express = require('express')
const router = express.Router()

const commentController = require('../app/controllers/CommentController')

router.post("/add/:id", commentController.post);

module.exports = router
