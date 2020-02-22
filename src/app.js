'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');

const app = express();

const router = express.Router();

//Connecta ao banco 
mongoose.connect(config.connectionString);

//Carrega os Models
const Product = require('./models/product');
const Customer = require('./models/customer');
const Order = require('./models/order');


//Carregar Rotas
const indexR = require('./routes/indexr');
const productR = require('./routes/productr');
const customerR = require('./routes/customer');
const orderR = require('./routes/order');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexR);
app.use('/products', productR);
app.use('/customers', customerR);
app.use('/orders', orderR);

module.exports = app;