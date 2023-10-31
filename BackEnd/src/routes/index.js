const regisLogIn = require('./regisLogIn')
const video = require('./videos')
const user = require('./user')
const spay = require('./spay')
const post = require('./post')

const {checkUserjwt} = require('../Service/Middleware')

function router(app) {
    app.use('*', checkUserjwt)
    app.use("/", regisLogIn);
    app.use('/video', video)
    app.use('/user', user)
    app.use('/spay', spay)
    app.use('/post', post)
}

module.exports = router;
