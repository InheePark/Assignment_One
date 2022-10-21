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
router.get('/views/About.ejs', indexController.about);

router.get('/views/Contact.ejs', indexController.contact);

router.get('/views/Projects.ejs', indexController.projects);

router.get('/views/Service.ejs', indexController.service);



module.exports = router;
