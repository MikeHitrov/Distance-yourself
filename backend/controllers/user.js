const models = require('../models');
const jwt = require('../utils/jwt');
const config = require('../config/config');

module.exports = {
    get: {
        logout: (req, res, next) => {
            res.clearCookie(config.cookie).redirect('/');
        }
    },

    post: {
        login: (req, res, next) => {
            const { username, password } = req.body;

            models.User.findOne({ username }).then((user) => {
                Promise.all([user, user.matchPassword(password)])
                    .then(([user, match]) => {
                        if (!match) {
                            console.log('Password is invalid');
                            return
                        }

                        const token = jwt.createToken({ id: user._id });

                        res
                            .cookie(config.cookie, token)
                            .redirect('/home/');

                    })
            })
        },

        register: (req, res, next) => {
            const { username, password } = req.body;

            console.log(req.body)

            models.User.create({ username, password }).then((registeredUser) => {
                const token = jwt.createToken({ id: registeredUser._id });

                res
                    .cookie(config.cookie, token)
                    .redirect('/');
            })
        }
    }
};