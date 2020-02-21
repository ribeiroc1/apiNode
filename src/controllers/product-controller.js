'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model('Product');
const ValidationContract = require('../validators/fluent-validator');
const repository = require('../repositories/product-repository');

exports.post = async (req, res, next) => {
    let contract = new ValidationContract();

    contract.hasMinLen(req.body.title, 3, 'O título deve conter pelo menos 3 caracteres !');
    contract.hasMinLen(req.body.slug, 7, 'O slug deve conter pelo menos 7 caracteres !');
    contract.hasMinLen(req.body.description, 10, 'A descrição deve conter pelo menos 10 caracteres !');

    //Se os dados forem inválidos.
    if (!contract.isValid()) {
        res.status(400).send(contract.errors()).end();
    };

    try {
        await repository.create(req.body)
        res.status(201).send({
            message: 'Produto cadastrado com sucesso !'
        });
    } catch (error) {
        res.status(400).send({
            message: 'Falha ao cadastrar o produto',
            data: error
        });
    };
};

exports.put = async (req, res, next) => {

    try {
        await repository.update(req.params.id, req.body)
        res.status(200).send({
            message: 'Produto atualizado com sucesso!'
        });
    } catch (error) {
        res.status(400).send({
            message: 'Falha ao atualizar produto',
            data: error
        });
    };
};

exports.delete = (req, res, next) => {
    res.status(201).send(req.body);
};

exports.get = async (req, res, next) => {
    try {
        var data = await repository.get();
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    };
};

exports.getBySlug = async (req, res, next) => {
    try {
        var data = await repository.getBySlug(true, req.params.slug);
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    };
};

exports.getById = async (req, res, next) => {
    try {
        var data = await repository.getById(req.params.id);
        res.status(200).send(data);
    } catch (error) {
        res.status(400).send(e);
    };
};

exports.getByTag = async (req, res, next) => {
    try {
        var data = await repository.getByTag(req.params.tag);
        res.status(200).send(data);
    } catch (error) {
        res.status(400).send(error);
    };
};

exports.delete = async (req, res, next) => {
    try {
        await repository.delete(req.params.id);
        res.status(200).send({
            message: 'Produto removido com sucesso!'
        });
    } catch (error) {
        res.status(400).send({
            message: 'Falha ao remover produto',
            data: error
        });
    };
};

