import React from 'react';
import './Search.css';

function Search() {
    return( 
        <div className="container">
            <form>
              <input type="search" placeholder="Type a city..." id="userSearchedCity"/>
              <button type="submit"> > </button> 
                </form>
        </div>);
    
}

export default Search;