const routers = require('../routers');

module.exports = (app) => {
    app.use('/', routers.home);

    app.use('/user', routers.user);

    app.use('*', (req, res, next) => {
        res.send('<h1>NOOOOOOO</h1>')
    })
};