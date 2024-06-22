import React from "react";
import { 
    CircularProgressbar,
  buildStyles
 } from "react-circular-progressbar";


function RatingIndicator({percentage}) {
  let pathColors; 
   if(percentage < 50) {
        pathColors="#ff0000"
    } else if(percentage >= 50  && percentage < 70 ){
        pathColors="#ffff00"
    }
    else{
        pathColors="#00ff00"
    }
 
  return (
    <div style={{ width: 100, height: 100 }}>
        <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        background
        backgroundPadding={6}
        styles={buildStyles({
          backgroundColor: "#000000",
          textSize: "25",
          textColor: "#fff",
          pathColor: pathColors,
          trailColor: pathColors + "50",
        })}
      />
    </div>
  );
}

export default RatingIndicator;
