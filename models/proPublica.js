var apiKeys = require('../javascript/apiKeys.js');
var Congress = require( 'propublica-congress-node' );
var client = new Congress(apiKeys.proPublica);

//Not sure how to exactly set this up for use from other JS
//I guess we can think of this as an ORM, a abstract layer on top of ProPublica NPM

//house either = house or senate

var proPublica = {
    getAllMembersByState: function(stateInitials, cb) {
        client.membersCurrentByStateOrDistrict({
            chamber: 'house',
            state: stateInitials,
            district: 0
        }).then(function(houseResults) {
            client.membersCurrentByStateOrDistrict({
            	chamber: 'senate',
            	state: stateInitials
            }).then(function(senateResults) {
            	cb(senateResults.results, houseResults.results);
            });
        });
   },

};

module.exports = proPublica;