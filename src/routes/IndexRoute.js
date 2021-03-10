const express = require('express');
const route = express.Router();

route.get('/', (req, res)=>{
    return res.status(200).json({
        name: 'NAVE API',
        version: '1.0'
    });
});

module.exports = route;