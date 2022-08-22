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
                <div className="col text-center">
                    <ForecastedDay  data={forecast[5]}/>
                    <ForecastedDay  data={forecast[13]}/>
                    <ForecastedDay  data={forecast[21]}/>
                    <ForecastedDay  data={forecast[27]}/>
                    
                </div>
            </div>
        </div>
    );}else{ 
        let forecastApiKey= (props.apiKey);
        let forecastApiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${props.latitude}&lon=${props.longitude}&cnt=28&appid=${forecastApiKey}&units=imperial`;
        axios.get(forecastApiUrl).then(handleResponse);
        return (null);}
}
export default WeatherForecast;