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
        let iconName= (forecast.list[0].weather[0].icon);
        let iconUrl="http://openweathermap.org/img/wn/"+(iconName)+"@2x.png";

        return (
        <div className="weather-forecast">
            <div className="row">
                <div className="col text-center">
                    <div>
                     <div>Day</div>
                     < img className="forecast-icon" src={iconUrl} alt={forecast.list[0].weather[0].description}/> 
                     <div><span className="WeatherForecast-temperature-high">{Math.round(forecast.list[0].main.temp_max)}°H |</span><span className="WeatherForecast-temperature-low"> {Math.round(forecast.list[0].main.temp_min)}°L</span></div>
                    </div>
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