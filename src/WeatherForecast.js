import React, {useState} from "react";
import "./WeatherForecast.css";
import ForecastedDay from "./ForecastedDay";
import axios from "axios";

function WeatherForecast(props) {

const [forecasted, setForecasted] = useState(false);
const [forecast, setForecast]=useState(" ");

    function handleResponse (response) {
        setForecasted(true);
        setForecast(response.data.list);
       
        
    }

    if (forecasted) {
        console.log(forecast);
        return (
        <div className="weather-forecast">
            <div className="row">
                <div className="row text-center pt-5 pb-3">
                    <ForecastedDay  data={forecast[8]}/>
                    <ForecastedDay  data={forecast[16]}/>
                    <ForecastedDay  data={forecast[24]}/>
                    <ForecastedDay  data={forecast[32]}/>
                    
                </div>
            </div>
        </div>
    );}else{ 
        let forecastApiKey= (props.apiKey);
        let forecastApiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${props.latitude}&lon=${props.longitude}&cnt=33&appid=${forecastApiKey}&units=imperial`;
        axios.get(forecastApiUrl).then(handleResponse);
        return (null);}
}
export default WeatherForecast;