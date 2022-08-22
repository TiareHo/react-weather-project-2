import React from "react";


function ForecastedDay(props) {

   
function day() {
    let date = new Date(props.data.dt*1000);
    let day = date.getDay();
     
    let days=["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
console.log(day);
    return (<div>{days[day]}</div>);
}

function icon() {
    let imageUrl="http://openweathermap.org/img/wn/"+(props.data.weather[0].icon)+"@2x.png";
    return (< img className="forecast-icon" src={imageUrl} alt="weather summary"/> );
}

function high() {
    let highTemperature=Math.round(props.data.main.temp_max);
    return (
        <span className="WeatherForecast-temperature-high">{highTemperature}°H |</span>
        );
}

function low() {
    let lowTemperature=Math.round(props.data.main.temp_min);
    return ( <span className="WeatherForecast-temperature-low"> {lowTemperature}°L</span>);
}
    return (
        <div>
        {day()}
        {icon()}
        <div>{high()} {low()}</div>
       </div>
    );
}

export default ForecastedDay;