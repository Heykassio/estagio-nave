const express = require('express');

const NaversRoutes = require('./src/routes/NaversRoutes');

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/navers', NaversRoutes);

module.exports = app;