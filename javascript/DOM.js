/*
	Random helper functions and variables
*/

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

//found here - https://stackoverflow.com/questions/4878756/how-to-capitalize-first-letter-of-each-word-like-a-2-word-city


function fromStateToInitial (state) {
	var index;
	for (var i = 0; i < states.length; i++) {
		if (states[i] == state) {
			index=i;
			break;
		}
	}
	return shortState[index];
}


//clear states links
function clearStateLinks () {
	$('#appendStatesHere').empty();
}

//used on stateBtn clickListener, to change navbar
//make this by making 2 more functions - appendLink and appendPanel, as it could be useful in
function appendStateLinksAndPanels (state) {

	$('#appendStatesHere').append(
			'<li><a href="#stateGeneralInfo">' + toTitleCase(state) + '</a></li>'
		);
	$('#infoPanels').append(
			'<section id="stateGeneralInfo" class="scrollspy mediumSize panelContent"></section>'
		);
	$('#appendStatesHere').append(
			'<li><a href="#federalSenators">Federal Senators</a></li>'
		);
	$('#infoPanels').append(
			'<section id="federalSenators" class="scrollspy mediumSize panelContent"></section>'
		);
	$('#appendStatesHere').append(
				'<li><a href="#federalReps">Federal Representatives</a></li>'
		);
	$('#infoPanels').append(
			'<section id="federalReps" class="scrollspy mediumSize panelContent"></section>'
		);	
	$('#appendStatesHere').append(
			'<li><a href="#stateSenators">State Senators</a></li>'
		);
	$('#infoPanels').append(
			'<section id="stateSenators" class="scrollspy mediumSize panelContent"></section>'
		);		
	$('#appendStatesHere').append(
			'<li><a href="#stateReps">State Representatives</a></li>'
		);
	$('#infoPanels').append(
			'<section id="stateReps" class="scrollspy mediumSize panelContent"></section>'
		);
}