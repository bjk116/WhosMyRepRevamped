//Main controller js
var express = require('express');

var router = express.Router();

//Import model to use, though don't think we need this yet
var userComments = require('../models/users.js');

//Home Page
router.get('/', function(req, res) {
	//Only have to send back static static homepage
	res.render('index');
})

module.exports = router;