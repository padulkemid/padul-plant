const route = require('express').Router();
const ProductController = require('../controllers/product');
const Auth = require('../middlewares/auths');

// get products
route.get('/', Auth.authentication, ProductController.getItems);

// buy products
route.post('/:id', Auth.authentication, ProductController.buyItems);

// get shopping cart
route.get('/cart', Auth.authentication, Auth.authorization, ProductController.shoppingCart);

// clean cart
route.delete('/cart', Auth.authentication, Auth.authorization, ProductController.cleanCart);

module.exports = route;
