global.Comment = require('../models/Comment.model')
class CommentController {
    async post(req, res) {
        const data = {
            content: JSON.parse(JSON.stringify(req.body.content)),
            id_blog: parseInt(req.params.id)
        };
        Comment = [...Comment, data]
        console.log(Comment)

        res.redirect(`/${req.params.id}`);
    }
}

module.exports = new CommentController