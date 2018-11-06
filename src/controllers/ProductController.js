const mongoose = require('mongoose');
require('../models/Product');

const Product = mongoose.model('Product');

module.exports = {
    async listar(req, res) {
        const { page = 1 } = req.query;
        const products = await Product.paginate({}, { page: page, limit: 10 });

        return res.json(products);
    },

    async listarPorId(req, res) {
        const product = await Product.findById(req.params.id);

        return res.json(product);
    },

    async criar(req, res) {
        const product = await Product.create(req.body);

        return res.json(product);
    },

    async alterar(req, res) {
        const produtc = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(produtc);
    },

    async excluir(req, res) {
        await Product.findByIdAndDelete(req.params.id);

        return res.send();
    }
}