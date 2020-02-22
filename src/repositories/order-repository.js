'use restrict';
const mongoose = require('mongoose');
const Order = mongoose.model('Order');

exports.create = async (data) => {
    var order = new Order(data);
    const res = await order.save();
    return res;
};

exports.get = async () => {
    const res = await Order
        .find({}, 'number status')
        .populate('customer', 'name')
        .populate('items.product', 'title');
    return res;
};