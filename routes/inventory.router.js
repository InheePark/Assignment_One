/*
router for inventory views
Inhee Park (301162514)
October 21, 2022
*/

var express = require('express');
var router = express.Router();
let inventoryController = require('../controllers/inventory.controller');
let passport = require('passport');

function requireAuth(req, res, next){
    if(!req.isAuthenticated()){
        // req.isAuthenticated -> checks if session is authenticated
        req.session.url = req.originalUrl;
        return res.redirect('/users/signin');
    }
    next();
}

// middleware passport.authenticate('tokencheck', {session: false})
// module passport.authenticate -> we can authenticate users using 'tokencheck'
// {session: false} -> backend has no session

/* GET users listing. */
router.get('/list', passport.authenticate('tokencheck', {session: false}), inventoryController.inventoryList);
router.put('/edit/:id', passport.authenticate('tokencheck', {session: false}), inventoryController.processEdit);
// router for controller logic for edit

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', passport.authenticate('tokencheck', {session: false}), inventoryController.processAdd);
// Route for Delete
router.delete('/delete/:id', passport.authenticate('tokencheck', {session: false}), inventoryController.performDelete);

module.exports = router;