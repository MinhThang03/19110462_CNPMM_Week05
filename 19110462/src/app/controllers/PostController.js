global.Post = require('../models/Post.model')
global.Comment = require('../models/Comment.model')
var bodyParser = require('body-parser')

class PostController {
    // [GET] /
    index(req, res, next) {
        res.render('home', {post: Post})
    }

    // [GET] /course/:id
    show(req, res, next) {
        const postDetail = Post.find(post => post.id === parseInt(req.params.id))
        const commentDetail = Comment.filter(comment => comment.id_blog === parseInt(req.params.id))
        console.log('test', commentDetail)
        res.render('post/show', {post: postDetail, comment: commentDetail})
    }

    // Show page create post blog
    addShow(req, res) {
        res.render('post/create', {post: Post})
    }

    async add(req, res) {
        const data = {
            id: Post.length + 1,
            title: JSON.parse(JSON.stringify(req.body.title)),
            description: JSON.parse(JSON.stringify(req.body.description))
        };
        Post = [...Post, data]

        res.redirect('/');

    }

    async delete(req, res) {
        Post = Post.filter(post => post.id !== parseInt(req.params.id))
        res.redirect('/');
    }

    updateShow(req, res) {
        const postDetailEdit = Post.filter(post => post.id === parseInt(req.params.id))
        res.render('post/edit', {post: postDetailEdit})
    }

    update(req, res) {
        const data = {
            id: parseInt(req.params.id),
            title: JSON.parse(JSON.stringify(req.body.title)),
            description: JSON.parse(JSON.stringify(req.body.description))
        };
        Post = Post.map(obj => {
            if (obj.id === parseInt(req.params.id)) {
              obj = data
            }
          
            return obj;
          });
        res.redirect('/');
    }
}

module.exports = new PostController