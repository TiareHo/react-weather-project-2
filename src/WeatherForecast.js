import React, {useState, useEffect} from "react";
import "./WeatherForecast.css";
import ForecastedDay from "./ForecastedDay";
import axios from "axios";

function WeatherForecast(props) {

let [forecasted, setForecasted] = useState(false);
const [forecast, setForecast]=useState(" ");

useEffect(()=>{
    setForecasted(false);
}, [props.latitude]);

    function handleResponse (response) {
        setForecasted(true);
        setForecast(response.data.list);
       
        
    }

    if (forecasted) {
        
        return (
        <div className="weather-forecast">
            <div className="row">
                <div className="row text-center pb-3 m-0 pt-3">
                    <ForecastedDay  data={forecast[8]}/>
                    <ForecastedDay  data={forecast[16]}/>
                    <ForecastedDay  data={forecast[24]}/>
                    <ForecastedDay  data={forecast[32]}/>
                    
                </div>
            </div>
        </div>
    );}else{ 
        let forecastApiKey= (props.apiKey);
        let lat = (props.latitude);
        let lon=(props.longitude);
        let forecastApiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=33&appid=${forecastApiKey}&units=imperial`;
        axios.get(forecastApiUrl).then(handleResponse);
        return (null);}
}
export default WeatherForecast;