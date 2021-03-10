const express = require('express');

const NaversRoutes = require('./src/routes/NaversRoutes');
const ProjectsRoutes = require('./src/routes/ProjectsRoutes');
const ProjectNaversRoutes = require('./src/routes/ProjectsNaversRoutes');
const IndexRoute = require('./src/routes/IndexRoute');

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/', IndexRoute);
app.use('/navers', NaversRoutes);
app.use('/projects', ProjectsRoutes);
app.use('/project-naver', ProjectNaversRoutes);

module.exports = app;