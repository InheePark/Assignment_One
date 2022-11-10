/*
Home, About, Projects, Service view routes for app
Inhee Park (301162514)
October 21st, 2022
*/

// this folder is where we GET the request 
// similar to creating a request methtod 
// app.get('/')
var express = require('express');
var router = express.Router();
let indexController = require('../controllers/index.controller');

/* 
GET home page. 
GET http request root
// url: http://localhost:3000/
*/
router.get('/', indexController.home);





module.exports = router;
