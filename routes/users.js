/*
router for login, auth views
Inhee Park (301162514)
October 21, 2022
*/

var express = require('express');
var router = express.Router();
let userController = require('../controllers/users.controller');
// controller logic for users

/* GET users listing. */
// router.get('/', userController.user);

// router for sign up page

router.post('/signup', userController.signup); // router for signup controllers

// router for sign in page

router.post('/signin', userController.signin); // router for signin controllers

// sign out



module.exports = router;
