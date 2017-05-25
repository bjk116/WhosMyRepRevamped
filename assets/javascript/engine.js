var states = ['alabama', 'alaska', 'arizona', 'arkansas', 'california', 'colorado', 
'connecticut', 'delaware', 'florida', 'georgia', 'hawaii', 'idaho', 'illinois', 
'indiana', 'iowa', 'kansas', 'kentucky', 'louisiana', 'maine', 'maryland', 
'massachusetts', 'michigan', 'minnesota', 'mississippi', 'missouri', 'montana', 
'nebraska', 'nevada', 'new hampshire',	'new jersey', 'new mexico', 'new york', 
'north carolina', 'north dakota', 'ohio', 'oklahoma', 'oregon', 'pennsylvania', 
'rhode island', 'south carolina', 'south dakota', 'tennessee', 'texas', 'utah', 
'vermont', 'virginia', 'washington', 'west virginia', 'wisconsin', 'wyoming'];

//found here - https://stackoverflow.com/questions/4878756/how-to-capitalize-first-letter-of-each-word-like-a-2-word-city
function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

function listLinks(linkList, targetID, tag) {
	console.log('running listLinks');
	var outerTag = $('<ul id="nav-mobile" class="left hide-on-med-and-down text-center">');

	for(var i = 0; i < linkList.length; i++) {
		console.log('going to append ' + linkList[i] + ' to id #' + targetID);
		var toAppend = $(tag);
		//for onClick later CSS purporses, adding nav-link class
		toAppend.addClass('nav-link');
		toAppend.addClass('stateBtn');
		var titledState = toTitleCase(linkList[i]);
		toAppend.append('<a href="#" class="waves-effect waves-light btn stateBtn_css" data-state="' + linkList[i] + '">' + titledState + '</a>');
		console.log('About to append ' + toAppend);
		$(outerTag).append(toAppend);
	}

	$('#' + targetID).append(outerTag);
};

$(document).ready( function () {
	//Populate DOM with reptitive items
	listLinks(states, 'stateListDOM', '<li>');
	
	//Initialize necessary Materialize jQuery commands
	$('.scrollspy').scrollSpy();
    $('#content').pushpin({
      top: $('#content').offset().top 
    });
    $('.scrollspy').scrollSpy({
      scrollOffset: 0
    });

	/*
		C L I C K    L I S T E N E R   E V E N T S
	*/
	// When a state is clicked...
	$('#stateListDOM').on('click', '.stateBtn', function(event) {
		var stateClicked = event.target.attributes[2].nodeValue;
		/* Change in DOM will be based on what information is available, so need to do API call
		and then change DOM according to response */
		getProPublicaStateInfo(stateClicked);
	});
	// When a Federal Senator/Representative is clicked

	}
);