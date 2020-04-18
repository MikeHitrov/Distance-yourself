const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

module.exports = (app) => {
    app.use(express.static('./static'));

    app.use(bodyParser.urlencoded({ extended: true }));
};