//===========================================
//		HTML To-Do Items
//===========================================
//	1) Create PushPin in Main area  DONE
//	2) Create info slide
//	3) Decide what informtaion to give back and based on what
//	
//===========================================
//		CSS To-Do Items
//===========================================
// 	1) Make states in a scroll like Representatives are on WhosMyRep DONE
//	2) Figure out a font family/color Schema 
//	3) Create logo


//===========================================
//		JavaScript To-Do Items
//===========================================
//	1) function to capitalize state names in appending function toTitleCase(); DONE
//	2) Create user login/sign up
//	3) Function for on click of state
//	4) Function for search of state
//	5) Function for zipcode search
//	6) Poll feature for those logged in?

//===========================================
//		General Flow of Javascript Functions
//===========================================
//user clicks on a state
	//loadStateData(state);

//or user searchs for a zipcode/state
	//loadStateData(state);
		//these functions should possibly all inside the .done of the 1 propbulica API
			//populateBillsDiv(state); show what bills are coming up on state level from proPublica
			//populateFederalSenators(state);
			//popuateFederalRepresentatives(state);

	//or loadZipcodeData(zipCode);
		//All inside propublicaAPI done response
			//populateBillsDivLocal();
			//populateFederalSenators(stateOf(zipCode));
			//populateFederalRepresentatives(stateOf(zipCode));
		