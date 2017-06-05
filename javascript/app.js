//REMEMBER TO CONSOLE.LOG EVERYTHING! LEAVE NO STONE UNTURNED!

//Step 1: Create AJAX code which will receive API data from server and send queries to server.
 //queryURL = the host site + the query parameters + the API key
 var keyWord = "fingernail" //This is just to help test your code with an example.
 var apiPublicKey = "dc6zaTOxFJmzC";
 //Put down the url. You will need to change the http thingymajig to an https thingymajig.
 var queryURL = "api.giphy.com/v1/gifs/search?q=" + keyWord + "&api_key=" + apiPublicKey;
 
 //http:api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC   
 var topics = ["violin", "sneeze", "hummingbird", "trick-or-treat", "yo-yo", "breakdance", "magical-girl", "captain-planet", "firework", "shadow-puppet"];
 $.ajax({
      url: queryURL,
      method: 'GET'
}).done(function(response) {
//Input your JSON and API parameters inside this entire object.
	console.log(response);	
	for(var i = 0; i < topics.length; i++){
	$("<button>").append(topics[i]);
	
	//create space for actual gif to be displayed.
	var newGif = $("<img>").addClass("gif");
	//create button to summon newGif variable
	var summon = $("<button>");
	var buttonName = $("summon").append(topics[i]);
	$("button").on("click", function(){
		var tenOfEach = response.limit //response.limit pulls query filter "limit to 10 results" from server
		tenOfEach = 10;
		var mpaa = response.rating//response.rating pulls query filter "limit to following rating" from server.
		$("mpaa") = "g";
		$("buttonName").html(topics[i]);
		$("button").after(newGif);
		var redLightGreenLight = $("newGif").attr("data-state");
		redLightGreenLight = "still";
		if(redLightGreenLight === "still"){
			var move = $("redLightGreenLight").on("click", function(){
				redLightGreenLight = "animate"
				console.log($("move"));
				});//end "on "click" event
			};/*end if() conditional*/else{
				var stop = $("redLightGreenLight").on("click", function(){
				redLightGreenLight = "still";
				console.log($("stop"));
				});//end "on click" event
			};//end else conditional
		});//end "button" click event function
	};//end for() loop
	//Now you need to create a space where user can type and summon more buttons.
	var userSummoner = $(".summon");
	userSummoner.on("click", function(){
	$("newGif").html();
	$("tenOfEach") = 10;
	$("tenOfEach").html();
	$("mpaa") = "g";
	$("mpaa").html();
	});//end userSummoner click event function
	//Now make sure that the Gifs start paused, and resume/pause according to user's click
	 
});//end function(response)


















     
  

    //Public API key: dc6zaTOxFJmzC

//Step 2: 
