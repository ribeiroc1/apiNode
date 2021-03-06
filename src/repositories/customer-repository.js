'use restrict';
const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');

exports.create = async (data) => {
    var customer = new Customer(data);
    const res = await customer.save();
    return res;
};

exports.get = async () => {
    const res = await Customer
        .find({
            active: true
        }, 'name email password');
    return res;
};

exports.authenticate = async (data) => {
    const res = await Customer
        .findOne({
            id: data._id,
            email: data.email,
            password: data.password
        });
    return res;
};

exports.getById = async (id) => {
    const res = await Customer
        .findById(id);
    return res;
};