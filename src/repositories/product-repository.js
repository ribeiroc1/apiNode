'use restrict';
const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = async () => {
    const res = await Product
        .find({
            active: true
        }, 'tittle price slug');
    return res;
};

exports.delete = async (id) => {
    const res = await Product
        .findOneAndRemove(id);
    return res;        
};

exports.getByTag = async (tag) => {
    const res = await Product
        .find({
            tags: tag,
            active: true
        }, 'title description price slug tags');
    return res;
};

exports.getById = async (id) => {
    const res = await Product
        .findById(id);
    return res;
};

exports.getBySlug = async (status, slug) => {
    const res = await Product
        .findOne({
            active: status,
            slug: slug
        },
            'title price slug');
    return res;
};

exports.create = async (data) => {
    var product = new Product(data);
    const res = await product.save();
    return res;
};

exports.update = async (id, data) => {
    const res = await Product
        .findByIdAndUpdate(id, {
            $set: {
                title: data.title,
                description: data.description,
                price: data.price
            }
        });
    return res;s
};