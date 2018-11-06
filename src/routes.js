const express = require('express');

const routes = express.Router();

const ProductController = require('../src/controllers/ProductController');

routes.get('/products', ProductController.listar);
routes.get('/products/:id', ProductController.listarPorId);
routes.post('/products', ProductController.criar);
routes.put('/products/:id', ProductController.alterar);
routes.delete('/products/:id', ProductController.excluir);

module.exports = routes;

