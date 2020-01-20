const express = require('express');
const uuid = require('uuid');
const route = express.Router();

route.post('/',(req,res)=>{
   const file = req.files.file;
   file.mv(`${__dirname}/uploads/${uuid()+file.name}`);
   
})

module.exports = route;