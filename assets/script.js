var apikey = "62039493a18c896250d3380996987ad0";
var queryParams = {"appid": '62039493a18c896250d3380996987ad0'};
var queryCurrentURL = "https://api.openweathermap.org/data/2.5/weather?"
var query5DURL = "http://api.openweathermap.org/data/2.5/forecast?";
var queryGEOURL = "http://api.openweathermap.org/geo/1.0/direct?";

// event listener on click and grab the city that was typed
$("#search-button").on("click", function(event){
    
    //prevent event propagation on clicked events
    event.preventDefault();
    
$("#search-input").empty();

    //grab the value of the search input
var searchInput = $("#search-input").val().trim();
console.log(searchInput);
queryParams.q = searchInput
queryParams.limit = "1"
var queryURL = queryGEOURL + $.param(queryParams);
console.log(queryURL);

fetch (queryURL)
.then (function(response){
    return response.json()
    .then(function(data){
    console.log(data)
    console.log(data[0].lon);
    console.log(data[0].lat);
var queryParams = "";
var queryParams = {"appid": '62039493a18c896250d3380996987ad0'};
queryParams.lat = data[0].lat;
queryParams.lon = data[0].lon;
console.log($.param(queryParams));
queryURL = query5DURL + $.param(queryParams);
queryCurURL = queryCurrentURL + $.param(queryParams);
console.log(queryURL);
console.log(queryCurURL);
fetch (queryCurURL)
.then (function(response){
    return response.json()
    .then(function(data){
        console.log(data);
        var currentCity = $("<h1>").text(searchInput);
        var currentTemp = $("<p>").text()
    })})

fetch (queryURL)
.then (function(response){
    return response.json()
    .then(function(data){
        console.log(data);
        var currentCity = $("<h1>").text(searchInput);
        var currentTemp = $("<p>").text()
    })
})
})
})
var historyP = $('<div type = "button" class ="btn btn-light m-2"></div>');
historyP.attr("data-city", searchInput);
historyP.text(searchInput);
$('#history').prepend(historyP);

})

var buildGeoQuery = function(){

}