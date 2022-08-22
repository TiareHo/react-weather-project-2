import React from "react";
import "./Weather.css";
import "./App.css";
import PrettyDate from "./PrettyDate";
import MainTemperature from "./MainTemperature";
import WeatherForecast from "./WeatherForecast";
import DaylightHours from "./DaylightHours";
import Footer from "./Footer";

function Weather(props) {
  
  
  if (props.data.country==="US"){props.data.country=" ";}
  
  
return(
       <div className="container"> 
       
       
       <div className="row bg-white pt-4">
        <div className="col-md-6">
        <h1 className="card-title">{props.data.city} {props.data.country}</h1> 
        <PrettyDate epochDay={props.data.date} />
        
        <div className="main-temperature-and-units"> <img src={props.data.iconUrl} className="card-img" alt={props.data.description} />
        <MainTemperature imperial={props.data.temperature} /></div>
        <DaylightHours sunrise={props.data.sunrise} sunset={props.data.sunset}/>
        </div>
        <div className="col-md-6 mt-4">
          <ul className="list-group">
            <li className="list-group-item description"> {props.data.description}:</li>
            <li className="list-group-item">High:  <strong className="high-and-low">{Math.round(props.data.temp_max)}</strong><span>°f </span> 
              | Low:   <strong className="high-and-low">{Math.round(props.data.temp_min)}</strong><span>°f</span></li>
            <li className="list-group-item">Wind:  <strong>{Math.round(props.data.wind)} mph</strong><small> @</small> <strong>{props.data.wind_direction}</strong>°</li>
            <li className="list-group-item">Barometer:   <strong>{Math.round(props.data.barometer*0.02953)} inHg</strong></li>
            <li className="list-group-item">Humidity:  <strong>{props.data.humidity} %</strong></li>
          </ul>
        </div>
        <WeatherForecast 
            latitude={props.data.latitude} 
            longitude={props.data.longitude}
            apiKey={props.data.apiKey}/>
       </div>
       <Footer />

          </div>
    );} 

    export default Weather;