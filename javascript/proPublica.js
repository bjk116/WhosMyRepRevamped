var apiKeys = require('./apiKeys.js');
var Congress = require( 'propublica-congress-node' );
var client = new Congress(apiKeys.proPublica);

//Not sure how to exactly set this up for use from other JS
//I guess we can think of this as an ORM, a abstract layer on top of ProPublica NPM

//house either = house or senate

var proPublica = {
    getMembersByState: function(stateInitials, house, cb) {
        client.membersCurrentByStateOrDistrict({
            chamber: house,
            state: stateInitials
        }).then(function(res) {
            cb(res);
        })

    }
};

module.exports = proPublica;