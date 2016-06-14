console.log("hello world")

// https://congress.api.sunlightfoundation.com/legislators?apikey=e6fff8a12a4f4f98be1533569bedcfd8

// console.log($)
var promise = $.getJSON('https://congress.api.sunlightfoundation.com/legislators?apikey=e6fff8a12a4f4f98be1533569bedcfd8')

// console.log(promise.readyState)

// setTimeout(function(){console.log(promise.readyState)}, 3000)

// promise.then() takes as input a function, it queues up that function to run when the promise is fulfilled. 
// when the promise is fulfilled (i.e. the data is ready), the promise (and not us) will invoke the function.


var statesContainer = document.querySelector('#statesContainer')


var hanldeData = function(apiResponse){
	console.log(apiResponse)
	var legArray = apiResponse.results
	var htmlString = '<h1>We Have ' + apiResponse.count + ' Congressional Cuties to Show You Today</h1>'
	for (var i = 0; i < legArray.length; i++) {
		var legObj = legArray[i]
		console.log(legObj.state_name)
		htmlString += '<p class = "stateName"> First Name: ' + legObj.first_name + '</p>'
		htmlString += '<p class = "stateName"> State: ' + legObj.state_name + '</p>'
	}
	statesContainer.innerHTML = htmlString

}





promise.then(hanldeData)