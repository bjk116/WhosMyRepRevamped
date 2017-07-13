//Dependencies
var express = require('express');
var helper = require('../javascript/helper.js');
var proPublica = require('../models/proPublica.js');

//Router
var router = express.Router();

//Import model to use, though don't think we need this yet
var userComments = require('../models/users.js');

//Home Page
router.get('/', function(req, res) {
	//Only have to send back static static homepage
	res.render('index');
});

router.get('/state/:stateName?', function(req, res) {
	var stateInitials = req.params.stateName.toLowerCase();
	console.log(stateInitials);
	var stateInitialIndex = helper.getStateInitials(stateInitials);

	if(stateInitialIndex === -1) {
		res.render('error');
	} else {
		//Some alert to let user know input is not valid, or maybe redirect to an error page?
		proPublica.getAllMembersByState(stateInitials, function(senateResults, houseResults) {
			console.log('SENATE');
			console.log(senateResults);
			console.log('HOUSE');
			console.log(houseResults);
		});
		//to-do - get all information on representatives/senators from models js, put in object for rendering
		res.render('state');
	}
});

module.exports = router;