import React, {useState} from 'react';
import './Search.css';

export default function Search() {
  
  const [city, setCity]=useState("Santa Barbara");

  function handleSubmit(event){
    event.preventDefault();
    console.log({city});
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

    return( 
        <div className="container">
            <form onSubmit={handleSubmit}>
              <input type="search" placeholder="Type a city..." id="userSearchedCity" onChange={updateCity}/>
              <button type="submit"> > </button> 
                </form>
        </div>);}