const controller = require("./controller/auth.controller");
const { sendNotFound } = require('./helpers/response')

module.exports = (app) => {
    app.get('/', (req, res) => {
        res.sendFile(process.env.DIR_NAME_INTRO + '/intro.html')
    })
    app.get('/checkNetwork', (req, res) =>
        res.send({
            status: 'SUCCESS',
            code: 200,
            message: 'Network Connected!'
        })
    )
    app.post('/api/auth/login', controller.signin)

    app.use((req, res) => sendNotFound(res))
}
