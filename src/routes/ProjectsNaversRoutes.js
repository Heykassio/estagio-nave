const express = require('express');
const route = express.Router();
const ProjectNaversController = require('../controllers/ProjectsNaversController');

route.post('/', ProjectNaversController.store);

module.exports = route;