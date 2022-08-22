import React from "react";

export default function DaylightHours (props) {
   
    function sunrise() {
        let sunriseDay=new Date(props.sunrise*1000);
        let hours=sunriseDay.getHours();
        let minutes=sunriseDay.getMinutes();
            if (minutes<10){minutes="0"+ sunriseDay.getMinutes();}
        return(
            <span> sunrise: <strong>{hours}:{minutes}AM</strong> </span>
      
    );}

    function sunset() {
        let sunsetDay= new Date(props.sunset*1000);
        let hours=sunsetDay.getHours();
          if (hours>12) {hours=(-12)+ sunsetDay.getHours();}
        let minutes=sunsetDay.getMinutes();
          if (minutes<10) {minutes="0"+sunsetDay.getMinutes();}
        return(
            <span> sunset: <strong>{hours}:{minutes}PM</strong></span>
        )
    }

    return(
       <div className="p-2 small pb-3">
       <div>{sunrise()} | {sunset()}</div>
       </div>
    );
}

