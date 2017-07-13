//JS file to place helper functions used in other JS files

//Dependencies

//State list arrays used for isState function
var states = ['alabama', 'alaska', 'arizona', 'arkansas', 'california', 'colorado', 
'connecticut', 'delaware', 'florida', 'georgia', 'hawaii', 'idaho', 'illinois', 
'indiana', 'iowa', 'kansas', 'kentucky', 'louisiana', 'maine', 'maryland', 
'massachusetts', 'michigan', 'minnesota', 'mississippi', 'missouri', 'montana', 
'nebraska', 'nevada', 'new hampshire',	'new jersey', 'new mexico', 'new york', 
'north carolina', 'north dakota', 'ohio', 'oklahoma', 'oregon', 'pennsylvania', 
'rhode island', 'south carolina', 'south dakota', 'tennessee', 'texas', 'utah', 
'vermont', 'virginia', 'washington', 'west virginia', 'wisconsin', 'wyoming'];

var shortState = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 
'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 
'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 
'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'];

function inArray(value, array) {
	for(var i = 0; i < array.length; i++) {
		if(value.toLowerCase() === array[i].toLowerCase()){
			return i;
		}
	}
	return -1;
}

var helper = {
	getStateInitials: function(stateName) {
		return inArray(stateName, shortState);
	},
	inArray: function(value, array) {
		for(var i = 0; i < array.length; i++) {
			if(value.toLowerCase() === array[i].toLowerCase()){ 
				return i;
			}
		}
		return -1;
	},
	toTitleCase: function (str) {
		//found here - https://stackoverflow.com/questions/4878756/how-to-capitalize-first-letter-of-each-word-like-a-2-word-city
    	return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
	},
	getFullStateByIndex: function(pos) {
		return states[pos];
	}

};

module.exports = helper;