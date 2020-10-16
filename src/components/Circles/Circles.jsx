import React from 'react';
import './Circles.css';

const Circles = ({numCircles, circleIdx}) => { 
  let circles = [...Array(numCircles)]
  circles.forEach((e, idx) => {
    if (circleIdx === idx) {
      circles[idx] = <div className="selected">{idx+1}</div>
    } else {
      circles[idx] = <div>{idx+1}</div>
    }
  })

  return (
    <div className="Circles">
      {circles}
    </div>
  )
}

export default Circles;