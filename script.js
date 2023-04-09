// f1bd78cea8a5d8bc86fcf44d8749adbd KEY
var inputEl = document.getElementById("cityname-input")
document.getElementById("search-btn").addEventListener("click", getLatLon)

//fetch MDN or WSchools

function getLatLon(){
    var apiUrl="http://api.openweathermap.org/geo/1.0/direct?q=Lakeland&limit=1&appid=f1bd78cea8a5d8bc86fcf44d8749adbd"
    fetch(apiUrl)
    .then(function (response) {
        //console.log (response)
        return response.json();
    })
    .then(function (data) {
        console.log (data)
        var lat = data[0].lat;
        var lon = data[0].lon;
        fiveDayWeather(lat,lon)
    })
}

function fiveDayWeather(lat,lon){
    var apiUrl="https://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+"&units=imperial&appid=f1bd78cea8a5d8bc86fcf44d8749adbd";
    fetch(apiUrl)
    .then(function (response) {
        
        return response.json();
    })
        .then(function (data) {
            console.log (data)
        //  console.log ("DATA: ", data.main.humidity)
        // humidity.textContent = "Humidity: " + data.main.humidity;
        
     })
}




// function sum(res) {
//    return  res;
// }
// var result = sum("Dennis Itua")
// console.log("RESULT: ", result);