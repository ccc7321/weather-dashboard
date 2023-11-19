var apikey = "62039493a18c896250d3380996987ad0";
var queryParams = {"appid": '62039493a18c896250d3380996987ad0'};
var queryCurrentURL = "https://api.openweathermap.org/data/2.5/weather?"
var query5DURL = "http://api.openweathermap.org/data/2.5/forecast?";
var queryGEOURL = "http://api.openweathermap.org/geo/1.0/direct?";
dayjs.extend(window.dayjs_plugin_relativeTime);



// event listener on click and grab the city that was typed
$("#search-button").on("click", function(event){
    
    //prevent event propagation on clicked events
    event.preventDefault();
    
$("#search-input").empty();
$("#today").empty();
$("#forecast").empty()

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
        var currentTime = dayjs().format("DD/MM/YYYY");
        var currentCity = $("<h1>").text(searchInput + " (" + currentTime + ")");
        var currentTemp = $("<p>").text((data.main.temp -  273.15).toFixed(2) + '°C');
        var currentWind = $("<p>").text(data.wind.speed + "KPH");
        var currentHumidity = $("<p>").text(data.main.humidity + "%");
        $("#today").append(currentCity, currentTemp, currentWind, currentHumidity);
    })})

fetch (queryURL)
.then (function(response){
    return response.json()
    .then(function(data){
        console.log(data);
        var interval = 8;
var totalHours = data.list.length;
var intervals = totalHours/interval;

for(i = 0; i < intervals - 1; i++) {
var startIndex = i + 1 * interval;
var intervalArray = data.list[startIndex];
console.log(intervalArray);
var forecastCard = $("<div class = 'card col bg-info text-dark p-2 m-1' style = 'width 18rem'>")
var forecastTime = dayjs().add(i + 1, "days").format("DD/MM/YYYY");
var forecastTimeCard = $('<li class="list-group-item bg-info">').text(forecastTime);
var forecastList = $("<ul class='list-group bg-info list-group-flush'>");
var forecastTemp = $('<li class="list-group-item bg-info">').text("Temp: " + (intervalArray.main.temp -  273.15).toFixed(2) + '°C');
var forecastWind = $('<li class="list-group-item bg-info">').text("wind: " + intervalArray.wind.speed + "KPH");
var forecastHumidity = $('<li class="list-group-item bg-info">').text("Humidity: " + intervalArray.main.humidity + "%");
forecastList.append(forecastTimeCard, forecastTemp, forecastWind, forecastHumidity);
forecastCard.append(forecastList);
$('#forecast').append(forecastCard);
}
var endArray = data.list[39];
console.log(endArray);
var endTime = dayjs().add(5, "days").format("DD/MM/YYYY");
var endTimeCard = $('<li class="list-group-item bg-info">').text(endTime);
var endCard = $("<div class = 'card col bg-info text-dark p-2 m-1' style = 'width 18rem'>")
var endList = $("<ul class='list-group bg-info list-group-flush'>");
var endList = $("<ul class='list-group bg-info list-group-flush'>");
var endTemp = $('<li class="list-group-item bg-info">').text("Temp: " + (endArray.main.temp -  273.15).toFixed(2) + '°C');
var endWind = $('<li class="list-group-item bg-info">').text("wind: " + endArray.wind.speed + "KPH");
var endHumidity = $('<li class="list-group-item bg-info">').text("Humidity: " + endArray.main.humidity + "%");
endList.append(endTimeCard, endTemp, endWind, endHumidity);
endCard.append(endList);
$("#forecast").append(endCard);
})})
})

})

var historyP = $('<div type = "button" class ="btn btn-light m-2"></div>');
historyP.attr("data-city", searchInput);
historyP.text(searchInput);
$('#history').prepend(historyP);

})

var fiveDayForecast = function(){
// loop through the array 8 times (because of three horus increment) to work out an average for each day

}