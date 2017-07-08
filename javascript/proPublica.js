var proPublicaAPIKey = 'z3XnEucyPP4p9E6L3LSPe5Y9j4NFzrdH4Tq7NuKP';

function populateStateRepresentatives ( info ) {

}

function populateStateSenators ( info ) {

}

function populateFederalRepresentatives ( info ) {

}

function populateFederalSenators ( info ) {

}

function getProPublicaStateInfo ( state ) {
	console.log('Running ProPublica on: ' + state);
	//create baseQuery URL and make request

	var queryURL = 'https://api.propublica.org/congress/v1/members/senate/'+ fromStateToInitial(state) + '/current.json';

	$.ajax({
         url: queryURL,
         method: "GET",
         dataType: 'json',
         headers: {'X-API-Key': proPublicaAPIKey}
    }).done(function(data) {
   		//inside .done()
   		console.log(data);
		//Make Panel on Senators
    	// populateFederalSenators(data);
    	//for each senator, request for their bills
    });
		//populate the DOM with information, state Name in Nav
		//Make Panel on upcoming bills
		//Make Panel on Representatives

}