import React, {useState} from 'react';
import './Search.css';
import axios from "axios";
import Weather from './Weather';


export default function Search(props) {
  const [weatherData, setWeatherData]=useState({ready:false});
  const [city, setCity]=useState(props.defaultCity);
 
  

function handleResponse(response) {
  console.log(response.data);
  let iconName=response.data.weather[0].icon;
  setWeatherData({
    ready:true,
    city:response.data.name,
    temperature:response.data.main.temp,
    temp_max:response.data.main.temp_max,
    temp_min: response.data.main.temp_min,
    humidity:response.data.main.humidity,
    barometer:response.data.main.pressure,
    wind:response.data.wind.speed,
    wind_direction: response.data.wind.deg,
    country: response.data.sys.country,
    date: response.data.dt,
    iconUrl: "http://openweathermap.org/img/wn/"+(iconName)+"@2x.png",
    description: response.data.weather[0].description,
  })}
  
  function handleSubmit(event){
    event.preventDefault();
    searchApi();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function searchApi() {
      const apiKey = "032e8a8762076f19419119384173a976";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(handleResponse);
    }

    if (weatherData.ready){

        return( 
          <div className="weather">
            <div className="container">
              <form onSubmit={handleSubmit}>
                <input type="search" placeholder="Search the weather in a city..." id="userSearchedCity" onChange={updateCity}/>
                <button type="submit"> {'>'} </button> 
                  </form>
          </div>
          <Weather data={weatherData} />
        
          </div>);} else {
          searchApi();
          return "Searching.....";
        }
      }