const express = require('express');
const route = express.Router();
const ProjectsController = require('../controllers/ProjectsController');

route.get('/', ProjectsController.index);
route.post('/', ProjectsController.store);
route.get('/:id', ProjectsController.show);

module.exports = route;