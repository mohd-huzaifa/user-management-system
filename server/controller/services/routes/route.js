const express = require('express');
const route = express.Router();
const services = require('../services');
const controller = require('../../controller');



route.get('/',services.homeRoute)
route.get('/add-user',services.addUserRoute)
route.get('/update-user',services.updateUserRoute)
route.post('/api/create',controller.create)
route.get('/api/create',controller.find)
route.put('/api/create/:id',controller.update)
route.delete('/api/create/:id',controller.delete)

module.exports = route;