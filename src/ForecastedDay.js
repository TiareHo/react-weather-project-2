import React from "react";
import "./ForecastedDay.css";

function ForecastedDay(props) {

   
function day() {
    let date = new Date(props.data.dt*1000);
    let day = date.getDay();
     
    let days=["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return (<div>{days[day]}</div>);
}

function icon() {
    let imageUrl="http://openweathermap.org/img/wn/"+(props.data.weather[0].icon)+"@2x.png";
    return (< img className="forecast-icon" src={imageUrl} alt="weather summary"/> );
}

function high() {
    let highTemperature=Math.round(props.data.main.temp_max);
    return (
        <span className="WeatherForecast-temperature-high small">{highTemperature}°H |</span>
        );
}

function low() {
    let lowTemperature=Math.round(props.data.main.temp_min);
    return ( <span className="WeatherForecast-temperature-low small"> {lowTemperature}°L</span>);
}
    return (
        <div className="col-md pt-4 pb-3 forecasted-column">
        {day()}
        {icon()}
        <div>{high()} {low()}</div>
       </div>
    );
}

export default ForecastedDay;