const video = require('./videos')
const user = require('./user')
const spay = require('./spay')
const post = require('./post')
const regisLogIn = require('./regisLogIn')

function router(app) {
    app.use("/", regisLogIn);
    app.use('/user', user)
    app.use('/video', video)
    app.use('/spay', spay)
    app.use('/post', post)
}

module.exports = router;
