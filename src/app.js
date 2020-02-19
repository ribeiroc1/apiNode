'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

const router = express.Router();

//Connecta ao banco 
mongoose.connect('mongodb+srv://admin:admin@cluster0-yv52c.mongodb.net/test?retryWrites=true&w=majority');

//Carrega os Models
const Product = require('./models/product');


//Carregar Rotas
const indexR = require('./routes/indexr');
const productR = require('./routes/productr')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexR);
app.use('/products', productR);

module.exports = app;