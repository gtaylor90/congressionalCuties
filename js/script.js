console.log("hello world")

// https://congress.api.sunlightfoundation.com/legislators?apikey=e6fff8a12a4f4f98be1533569bedcfd8

// console.log($)
var promise = $.getJSON('https://congress.api.sunlightfoundation.com/legislators?apikey=e6fff8a12a4f4f98be1533569bedcfd8')

// console.log(promise.readyState)

// promise.then(createCard)

setTimeout(function(){console.log(promise.readyState)}, 3000)

// promise.then() takes as input a function, it queues up that function to run when the promise is fulfilled. 
// when the promise is fulfilled (i.e. the data is ready), the promise (and not us) will invoke the function.


var statesContainer = document.querySelector('#statesContainer')

// function to test the data for debugging
var hanldeData = function(apiResponse) {
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



var createCard = function(apiResponse) {
    var legArray = apiResponse.results
    var repObj = {}
    for (var i = 0; i < legArray.length; i++) {
        var legObj = legArray[i]

        // var newDiv = document.createElement('div')
        // newDiv.className = 'repResentative'
        // console.log(newDiv)
        // var ulNode = newDiv.createElement('ul')

        // var firstName = legObj.first_name
        // var lastName = legObj.last_name
        // var stateName = legObj.state_name
        // var titleName = legObj.title
        // var partyName = legObj.party
        // var	termEnd = legObj.term_end
        // var webSite = legObj.website
        // var email = legObj.oc_email
        // var faceBook = legObj.facebook_id
        // var twitterHandle = legObj.twitter_id
        var repObj = {
            firstName: legObj.first_name,
            lastName: legObj.last_name,
            stateName: legObj.state_name,
            titleName: legObj.title,
            partyName: legObj.party,
            webSite: legObj.website,
            email: legObj.oc_email,
            facebook: legObj.facebook_id,
            twitter: legObj.twitter_id,
            termEnd: legObj.term_end
        }
        // var listItems = ["email: " + email, "website: " + webSite, "facebook: " + faceBook, "twitter: " + twitterHandle]
        // console.log(repObj)
        document.innerHTML = "<div class='repResentative'><h1>" +repObj.first_name + " " + repObj.last_name  + "</h1><h2>" + repObj.titleName + " " + repObj.partyName+ " "+ repObj.stateName + "</h2><ul> <li> email: " + repObj.email + "</li> <li> website: "+ repObj.webSite + "</li> <li> facebook: " + repObj.facebook + "</li> <li> twitter: " + repObj.twitter + "</li> </ul> <h3> term ending: " + repObj.termEnd + "</h3> </div>"

        // var nameNode = newDiv.createElement='h1'
        // var ulNode = newDiv.createElement('ul')
        // ulNode.appendChild('li').innerHTML = listItems

        // var subheadText = "<h2>" + titleName + " ~ " + partyName + " " + stateName "</h2>"

        // var cardFoot = "<h3> term ending: " + termEnd + "</h3>"



        // console.log(legObj.first_name)
        // console.log(legObj.state)
        // console.log(legObj.party)
        // console.log(legObj.title)
        // console.log(legObj.oc_email)
        // console.log(legObj.term_end)
        // document.querySelector('#container').c
    }
}



// "<div class='repResentative'><h1>"Name"</h1><h2>"Rep P-State"</h2><ul> <li>"email:"</li> <li>"web:"</li> <li>"fb:"</li> <li>"tw:"</li> </ul> <h3>"term end:"</h3> </div>"


promise.then(createCard)
