import React, { useState } from "react";
import './Bar.css'
import Fade from 'react-reveal/Fade';

function Bar({ done }) {

  const [style, setStyle] = useState({})

  setTimeout(() => {
    const newStyle ={
      opacity: 1,
      width:`${done}%`,
    }
    setStyle(newStyle)
  }, 200)

  return (
    <div className="bar">
      <div className="bar_done" style={style}>
        <div className="bar_doneData">{done}%</div>
      </div>
    </div>
  );
}

export default Bar;
