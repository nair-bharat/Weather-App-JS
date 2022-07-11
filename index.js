const weather = {

    apiKey : "generatedKey",

    //Data in English
    fetchWeather : function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey).then(
            (response) => response.json()).
            then(
                data => this.displayWeather(data)
            );
        },

    //Data in Hindi
    fetchWeatherHindi : function(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&lang=hi&&appid=" + this.apiKey).then(
            (response) => response.json()
        ).then(
            data => this.displayWeather(data)
        );
    },

    //Data in English for 5 days
    fetchWeatherfor5days : function (city) {
        fetch("https://api.openweathermap.org/data/2.5/forecast?lat=13.0878&lon=80.2785&appid=" + this.apiKey).then(
            (response) => response.json()).then(
                (data) => console.log(data));
    },

    //Display the required weather info:
    displayWeather : function(data) {
        const {name} =  data,
        {speed} = data.wind,
        {main, description, icon} = data.weather[0],
        {temp, humidity} = data.main;

        //latitude and longitude info:
        const {lat, lon} = data.coord;

        document.getElementById('name').innerText = "Place : " +(name);
        document.getElementById('infoText').innerHTML = "Weather Information";
        document.getElementById('description').innerText = "Description : " +description;
        document.getElementById('temp').innerText = "Temperature : "+(temp)+" °C";
        document.getElementById('humidity').innerText = "Humidity : "+(humidity)+" %";
        document.getElementById('speed').innerText = "Speed of Wind : "+(speed)+" m/s";

        console.log(name, speed, main, description, icon, temp, humidity);
    },

    //Just for validation purposes
    displayWeatherallJSON : function(data) {
        console.log(data);
    }

}