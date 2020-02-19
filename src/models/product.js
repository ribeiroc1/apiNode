'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String,
        required: true,
        trim: true,
        index: true,
        unique: true
    },
    description:{
        type: String,
        requirered: true,
        trim: true
    },
    price:{
        type: Number,
        requirered: true
    },
    active:{
        type: Boolean,
        requirered: true,
        default: true
    },
    tags: [{
        type: String,
        requirered: true
    }]
});

module.exports = mongoose.model('Product', schema);