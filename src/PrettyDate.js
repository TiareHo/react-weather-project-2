import React from "react";
import "./PrettyDate.css";

function PrettyDate(props) {

let normalDay=new Date(props.epochDay*1000);
console.log(normalDay);
let days =["Sunday", "Monday", "Tuesday", "Wednesday","Thursday","Friyay!","Saturday"]
let hours=normalDay.getHours();
if (hours<10){hours="0"+{hours};}
let minutes=normalDay.getMinutes();
if (minutes<10){hours="0"+{minutes};}
    return(
        <div>
           
        
         <h5><span id="updated">Last updated: </span> <span>{days[normalDay.getDay()]} {hours}{minutes}</span></h5>
         
        
        </div>
       
    );
}
export default PrettyDate;