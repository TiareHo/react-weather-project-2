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
        
        return (
        <div className="weather-forecast">
            <div className="row">
                <div className="col text-center">
                    <ForecastedDay  data={forecast[0]}/>
                    <ForecastedDay  data={forecast[1]}/>
                    <ForecastedDay  data={forecast[2]}/>
                    
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