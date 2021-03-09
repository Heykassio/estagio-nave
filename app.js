const express = require('express');

const NaversRoutes = require('./src/routes/NaversRoutes');
const ProjectsRoutes = require('./src/routes/ProjectsRoutes');

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/navers', NaversRoutes);
app.use('/projects', ProjectsRoutes);

module.exports = app;