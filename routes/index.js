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

// we can create different server http requests with different paths
// very modular 
router.get('/views/About.ejs', indexController.about); // About router

router.get('/views/Contact.ejs', indexController.contact); // Contacts router

router.get('/views/Projects.ejs', indexController.projects); // Projects router

router.get('/views/Service.ejs', indexController.service); // Service router



module.exports = router;
