'use restrict';
const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = () => {
    return Product
        .find({
            active: true
        }, 'tittle price slug');
};

exports.delete = (id) => {
    return Product
        .findOneAndRemove(id);
};

exports.getByTag = (tag) => {
    return Product
        .find({
            tags: tag,
            active: true
        }, 'title description price slug tags')
};

exports.getById = (id) => {
    return Product
        .findById(id);
};

exports.getBySlug = (status, slug) => {
    return Product
        .findOne({
            active: status,
            slug: slug
        },
            'title price slug');
};

exports.create = (data) => {
    var product  = new Product(data);
    return product.save();
};

exports.update = (id,data) => {
    return Product
        .findByIdAndUpdate(id, {
            $set: {
                title: data.title,
                description: data.description,
                price: data.price
            }
        });
};