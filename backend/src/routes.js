const { Router } = require('express');

const userController = require('./app/controllers/UserController');
const RatingController = require('./app/controllers/RatingController');
const ProductController = require('./app/controllers/ProductController');

const routes = new Router();

routes.post('/register', userController.store);
routes.get('/users', userController.index);
routes.put('/users', userController.update);
routes.delete('/users/:id', userController.delete);

routes.post('/products', ProductController.store);
routes.get('/products', ProductController.index);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.delete);

routes.post('/ratings', RatingController.store);
routes.get('/ratings/:product_id', RatingController.index);

module.exports = routes;