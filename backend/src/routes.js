const { Router } = require('express');

const userController = require('./app/controllers/UserController');
const RatingController = require('./app/controllers/RatingController');
const ProductController = require('./app/controllers/ProductController');
const PurchaseController = require('./app/controllers/PurchaseController');

const routes = new Router();

routes.post('/register', userController.store);
routes.get('/users', userController.index);
routes.put('/users', userController.update);
routes.delete('/users/:id', userController.delete);

routes.post('/products', ProductController.store);
routes.get('/products', ProductController.index);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.delete);

routes.post('/purchases', PurchaseController.store);
routes.get('/purchases', PurchaseController.index);
routes.put('/purchases/:id', PurchaseController.update);
routes.delete('/purchases/:id', PurchaseController.delete);

routes.post('/ratings', RatingController.store);
// Necessita informar o ID do produto via query
routes.get('/ratings', RatingController.index);

module.exports = routes;