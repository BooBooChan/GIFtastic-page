//REMEMBER TO CONSOLE.LOG EVERYTHING! LEAVE NO STONE UNTURNED!

//Step 1: Create AJAX code which will receive API data from server and send queries to server.
 var queryURL = "";//insert url here
 var apiPublicKey = "dc6zaTOxFJmzC";
 var topics = [{
 	topic:"violin"
 	id:#violin
 	q:"violin"
 	rating:
 	limit:10
 	}, 
 	{
 	topic:"sneeze"
 	id:#sneeze
 	q:"sneeze"
 	rating:
 	limit:10
 	}, 
 	{
 	topic:"hummingbird"
 	id:#hummingbird
 	q:"hummingbird"
 	rating:
 	limit:10
 	}, 
	{
	topic:"trick-or-treat"
	id:#trick-or-treat
	q:"trick+or+treat"
 	rating:
 	limit:10
	}, 
	{
	topic:"yo-yo"
	id:#yo-yo
	q:"yoyo"
 	rating:
 	limit:10
	}, 
	{
	topic:"breakdance"
	id:#breakdance
	q:"breakdance"
 	rating:
 	limit:10
	}, 
	{
	topic:"magical-girl"
	id:#magical-girl
	q:"magical+girl"
 	rating:
 	limit:10
	}, 
	{
	topic:"captain-planet"
	id:#captain-planet
	q:"captain+planet"
 	rating:
 	limit:10
	}, 
	{
	topic:"firework"
	id:#firework
	q:"firework"
 	rating:
 	limit:10
	}, 
	{
	topic:"shadow-puppet"
	id:#shadow-puppet
	q:"shadow+puppet"
 	rating:
 	limit:10
	}];
 $.ajax({
      url: queryURL,
      method: 'GET'
}).done(function(response) {
//Input your JSON and API parameters inside this entire object.

	for(var i = 0; i < topics.length; i++){
	$(<button>).append(topics[i]);
	$("button").on("click", function{
	(topics[i].topic).html()
	};
	//Here's the JSON
	
};


















      console.log(response);
    });

    //Public API key: dc6zaTOxFJmzC

//Step 2: 
