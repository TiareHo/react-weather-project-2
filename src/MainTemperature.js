import React, {useState} from "react";
import "./MainTemperature.css";

 function MainTemperature(props) {
    const [unit, setUnit]= useState("imperial");

function showCelcius (event){
    event.preventDefault(); 
    setUnit("metric");
}
function showFahrenheit (event){
    event.preventDefault();
    setUnit("imperial");
}

    if (unit==="imperial") {
    
    return (
       <span> 
        <span className="card-text main-temperature">{Math.round(props.imperial)}</span>
            <span className="temperature-units"> <strong>°F</strong> / 
                <a href="/" className="unit-link" onClick={showCelcius}>°C</a>
            </span>
       </span>
    )
    }else {
        let metric=(props.imperial-32)*.5556;
        return (
            <span> 
            <span className="card-text main-temperature">{Math.round(metric)}</span>
                <span className="temperature-units">
                     <a href="/" className="unit-link" onClick={showFahrenheit}>°F</a> / <strong>°C</strong>
                </span>
           </span>
        )
    }
}
export default MainTemperature;