'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/product-controller');
const authService = require('../services/auth-service');

router.post('/',authService.authorize, controller.post);
router.put('/:id',authService.authorize, controller.put); 
router.delete('/',authService.authorize, controller.delete);
router.get('/', controller.get);
router.get('/getBySlug/:slug', controller.getBySlug);
router.get('/getById/:id', controller.getById);
router.get('/getByTag/:tag', controller.getByTag);
router.delete('/:id',authService.authorize, controller.delete);

module.exports = router;