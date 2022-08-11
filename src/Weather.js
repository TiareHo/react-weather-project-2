import React from "react";
import "./Weather.css";
import "./App.css";

function Weather() {
    return (
       <div className="container"> 
     
       
       <h1>Santa Barbara, CA</h1>
       <div className="row bg-white p-4">
        <div className="col-md-3">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuF48SdIZwtV02HTxw1xEHWBs4PoL9eN3bqYCsb89iH-2KSpjdJvs33hLoUxuCgIRk1HM&usqp=CAU" class="card-img" alt="sunshine"/>
        </div>
        <div className="col-md-4">
          <div className="card-body">
            <h5 className="card-title mb-4">Tuesday 3:55PM</h5>
            <div className="main-temperature-and-units"><span className="card-text main-temperature">70</span>
            <span className="temperature-units">°F</span></div>
            <p className="card-text mt-2">Mostly Sunny</p>
          </div>
        </div>
        <div className="col-md-5">
          <ul className="list-group">
            <li className="list-group-item">Daytime High: 75°</li>
            <li className="list-group-item">Daytime Low: 70°</li>
            <li className="list-group-item">Wind Speed: 10 mph</li>
            <li className="list-group-item">Humidity: 30%</li>
            <li className="list-group-item">Barometer: 30 inHg</li>
          </ul>
        </div>
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
    );
    }

    export default Weather;