const route = require('express').Router();
const User = require('./user');
const Product = require('./product');
const errorHandler = require('../middlewares/error_handler');

route.use(User);
route.use('/items', Product);
route.use(errorHandler);

module.exports = route;
