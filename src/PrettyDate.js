import React from "react";
import "./PrettyDate.css";

function PrettyDate(props) {

let normalDay=new Date(props.epochDay*1000);

let days =["Sunday", "Monday", "Tuesday", "Wednesday","Thursday","Friyay!","Saturday"]

let hours=normalDay.getHours();
if (hours<10){hours="0"+ normalDay.getHours();}

let minutes=normalDay.getMinutes();
if (minutes<10){minutes="0"+ normalDay.getMinutes();}


    return(
        <div>
           
        
         <p><span id="updated">Last updated: </span> <span>{days[normalDay.getDay()]} {hours}{minutes}:</span></p>
         
        
        </div>
       
    );
}
export default PrettyDate;