'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model('Product');
const ValidationContract = require('../validators/fluent-validator');
const repository = require('../repositories/product-repository');

exports.post = (req, res, next) => {
    let contract = new ValidationContract();

    contract.hasMinLen(req.body.title, 3, 'O título deve conter pelo menos 3 caracteres !');
    contract.hasMinLen(req.body.slug, 7, 'O slug deve conter pelo menos 7 caracteres !');
    contract.hasMinLen(req.body.description, 10, 'A descrição deve conter pelo menos 10 caracteres !');

    //Se os dados forem inválidos.
    if (!contract.isValid()) {
        res.status(400).send(contract.errors()).end();
    };

    repository
        .create(req.body)
        .then(x => {
            res.status(201).send({
                message: 'Produto cadastrado com sucesso !'
            });
        }).catch(e => {
            res.status(400).send({
                message: 'Falha ao cadastrar o produto',
                data: e
            });
        });
};

exports.put = (req, res, next) => {
    repository
    .update(req.params.id,req.body)
    .then(x => {
            res.status(200).send({
                message: 'Produto atualizado com sucesso!'
            });
        }).catch(e => {
            res.status(400).send({
                message: 'Falha ao atualizar produto',
                data: e
            });
        });
};

exports.delete = (req, res, next) => {
    res.status(201).send(req.body);
};

exports.get = (req, res, next) => {
    repository
        .get()
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
};

exports.getBySlug = (req, res, next) => {
    repository
        .getBySlug(true, req.params.slug)
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
};

exports.getById = (req, res, next) => {
    repository
        .getById(req.params.id)
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
};

exports.getByTag = (req, res, next) => {
    repository
        .getByTag(req.params.tag)
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
};

exports.delete = (req, res, next) => {
    repository
        .delete(req.params.id)
        .then(x => {
            res.status(200).send({
                message: 'Produto removido com sucesso!'
            });
        }).catch(e => {
            res.status(400).send({
                message: 'Falha ao remover produto',
                data: e
            });
        });
};

