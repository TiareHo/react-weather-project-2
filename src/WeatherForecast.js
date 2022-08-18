import React, {useState} from "react";
import "./WeatherForecast.css";
import axios from "axios";

function WeatherForecast(props) {

const [forecasted, setForecasted] = useState(false);
const [forecast, setForecast]=useState(" ");

    function handleResponse (response) {
        setForecasted(true);
        setForecast(response.data);
    }

   

    if (forecasted) {
        console.log(forecast);
        let max=Math.round(forecast.list[0].main.temp_max);
        let min=Math.round(forecast.list[0].main.temp_min); 
        return (
        <div className="weather-forecast">
            <div className="row">
                <div className="col text-center">
                    <div>Day</div>
                    < img className="forecast-icon" src={props.forecastIconUrl} alt="4-day Forecast"/> 
                    <div><span className="WeatherForecast-temperature-high">{max}°H |</span><span className="WeatherForecast-temperature-low"> {min}°L</span></div>
                </div>
            </div>
        </div>
    );}else{ 
        let forecastApiKey= (props.apiKey);
        let forecastApiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${props.latitude}&lon=${props.longitude}&cnt=4&appid=${forecastApiKey}&units=imperial`;
        axios.get(forecastApiUrl).then(handleResponse);
        return (null);}
}
export default WeatherForecast;