import React from "react";
import "./WeatherForecast.css";
import axios from "axios";

function WeatherForecast(props) {

    function handleResponse (response) {
        console.log(response.data);
    }

    let lon=(props.longitude);
    let lat=(props.latitude);
    let forecastApiKey= (props.apiKey);
    let forecastApiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${forecastApiKey}&units=imperial`;
    axios.get(forecastApiUrl).then(handleResponse);

    return (
        <div className="weather-forecast">
            <div className="row">
                <div className="col text-center">
                    <div>Day</div>
                    < img className="forecast-icon" src={props.forecastIconUrl} alt="5-day Forecast"/> 
                    <div><span className="WeatherForecast-temperature-high">H° |</span><span className="WeatherForecast-temperature-low"> L°</span></div>
                </div>
            </div>
        </div>

    )
}
export default WeatherForecast;