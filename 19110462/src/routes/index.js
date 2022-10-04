const commentRouter = require('./comment')
const courseRouter = require('./post')

function route(app) {
    app.use('/', courseRouter)
    app.use('/comment', commentRouter)
}

module.exports = route