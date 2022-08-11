import React from "react";
import "./Weather.css";

function Weather() {
    return (
       <div className="container"> 
     
       
       <h1>Weather Report</h1>
       <div className="row bg-white p-4">
        <div className="col-md-3">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuF48SdIZwtV02HTxw1xEHWBs4PoL9eN3bqYCsb89iH-2KSpjdJvs33hLoUxuCgIRk1HM&usqp=CAU" class="card-img" alt="sunshine"/>
        </div>
        <div className="col-md-3">
          <div className="card-body">
            <h5 className="card-title">City Name, CA</h5>
            <p className="card-text" id="main-temperature">70°</p>
            <p className="card-text">Mostly Sunny</p>
          </div>
        </div>
        <div className="col-md-6">
          <ul className="list-group">
            <li className="list-group-item">Daytime High: 75°</li>
            <li className="list-group-item">Daytime Low: 70°</li>
            <li className="list-group-item">Wind Speed: 10 mph</li>
            <li className="list-group-item">Humidity: 30%</li>
            <li className="list-group-item">Barometer: 30 inHg</li>
          </ul>
        </div>
       </div>
       
        <footer>This page is open-sourced via
             and hosted on {" "}         
           <a href="https://reactjs.org" 
            target="_blank"
            rel="noopener noreferrer">
            Netlify
           </a>
          </footer>
          </div>
    );
    }

    export default Weather;