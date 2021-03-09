const express = require('express');
const route = express.Router();
const NaversController = require('../controllers/NaversController');

route.get('/', NaversController.index);
route.post('/', NaversController.store);
route.get('/:id', NaversController.show);

module.exports = route;