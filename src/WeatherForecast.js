import React from "react";
import "./WeatherForecast.css"

function WeatherForecast(props) {
    return (
        <div className="weather-forecast">
            <div className="row">
                <div className="col text-center">
                    <div>Day</div>
                    < img className="forecast-icon" src={props.forecast} alt="5-day Forecast"/> 
                    <div><span className="WeatherForecast-temperature-high">H° |</span><span className="WeatherForecast-temperature-low"> L°</span></div>
                </div>
            </div>
        </div>

    )
}
export default WeatherForecast;