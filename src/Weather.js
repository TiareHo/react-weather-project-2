import React from "react";
import "./Weather.css";
import "./App.css";
import PrettyDate from "./PrettyDate";
import MainTemperature from "./MainTemperature";
import WeatherForecast from "./WeatherForecast";
import DaylightHours from "./DaylightHours";

function Weather(props) {
  
  
  if (props.data.country==="US"){props.data.country=" ";}
  
  
return(
       <div className="container"> 
        <PrettyDate epochDay={props.data.date} />
       
       <div className="row bg-white p-4">
        <div className="col-md-6">
        <h1 className="card-title mb-4">{props.data.city} {props.data.country}</h1> 
        
        <div className="main-temperature-and-units"> <img src={props.data.iconUrl} className="card-img" alt={props.data.description} />
        <MainTemperature imperial={props.data.temperature} /></div>
        <DaylightHours sunrise={props.data.sunrise} sunset={props.data.sunset}/>
        </div>
        <div className="col-md-6">
          <ul className="list-group">
            <li className="list-group-item description"> {props.data.description}:</li>
            <li className="list-group-item">High:  <strong>{Math.round(props.data.temp_max)}°</strong><span>f</span></li>
            <li className="list-group-item">Low:  <strong>{Math.round(props.data.temp_min)}°</strong><span>f</span></li>
            <li className="list-group-item">Wind:  <strong>{Math.round(props.data.wind)} mph</strong> @ <strong>{props.data.wind_direction}°</strong></li>
            <li className="list-group-item">Humidity:  <strong>{props.data.humidity}%</strong></li>
            <li className="list-group-item">Barometer:   <strong>{Math.round(props.data.barometer*0.02953)} inHg</strong></li>
          </ul>
        </div>
        <WeatherForecast 
            latitude={props.data.latitude} 
            longitude={props.data.longitude}
            apiKey={props.data.apiKey}/>
       </div>
       
        <footer>This page is open-sourced via <a href="https://github.com/TiareHo/react-weather-project-2" target="_blank" rel="noopener noreferrer">GitHub {" "}</a>
             and hosted on {" "}         
           <a href="https://reactjs.org" 
            target="_blank"
            rel="noopener noreferrer">
            Netlify
           </a>
          </footer>
          </div>
    );} 

    export default Weather;