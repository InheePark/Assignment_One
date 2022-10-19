var express = require('express');
var router = express.Router();
let userController = require('../controllers/users.controller');
// controller logic for users

/* GET users listing. */
router.get('/', userController.user);

// router for sign up page
router.get('/signup', userController.renderSignup);
router.post('/signup', userController.signup);

module.exports = router;
