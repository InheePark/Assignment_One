var express = require('express');
var router = express.Router();
let userController = require('../controllers/users.controller');
// controller logic for users

/* GET users listing. */
router.get('/', userController.user);

// router for sign up page
router.get('/signup', userController.renderSignup);
router.post('/signup', userController.signup);

// router for sign in page
router.get('/signin', userController.renderSignin);
router.post('/signin', userController.signin);

// sign out
router.get('/signout', userController.signout);


module.exports = router;
