const express = require("express");
const router = express.Router();

const postController = require("../app/controllers/PostController");

router.get("/", postController.index);
router.get("/create", postController.addShow);
router.post("/post/add", postController.add);
router.get("/post/delete/:id", postController.delete);
router.get('/post/edit/:id', postController.updateShow);
router.post('/post/edit/:id', postController.update);
router.get("/:id", postController.show);

module.exports = router;
