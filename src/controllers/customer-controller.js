'use strict';

const ValidationContract = require('../validators/fluent-validator');
const repository = require('../repositories/customer-repository');

exports.post = async (req, res, next) => {
    let contract = new ValidationContract();

    contract.hasMinLen(req.body.name, 3, 'O Nome deve ter pelo menos 3 caracteres !');
    contract.isEmail(req.body.email, 'Não é um e-mail valido, verifique !');
    contract.hasMinLen(req.body.password, 6, 'A senha deve conter pelo menos 6 caracteres !');

    //Se os dados forem inválidos.
    if (!contract.isValid()) {
        res.status(400).send(contract.errors()).end();
        return;
    };

    try {
        await repository.create(req.body)
        res.status(201).send({
            message: 'Cliente cadastrado com sucesso !'
        });
    } catch (error) {
        res.status(400).send({
            message: 'Falha ao cadastrar o cliente',
            data: error
        });
    };
};