import React from "react";
import './PageTopsvg.css'

function PageTopsvg(props) {
  return (
    <div>
      <div className="PageTopsvg" style={props.Direction}>
        <svg className="PageTopsvg_svg" viewBox="0 24 150 28" preserveAspectRatio="none">
          <defs>
            <path id="PageTopsvg_Path"
            d="M-160 44c30 0 
            58-18 88-18s 
            58 18 88 18 
            58-18 88-18 
            58 18 88 18 
            v44h-352z"
            />
          </defs>
            <g className="parallex">
              <use className="one" xlinkHref="#PageTopsvg_Path" x="50" y="0"  />
              <use className="two" xlinkHref="#PageTopsvg_Path" x="50" y="3"  />
              <use className="three" xlinkHref="#PageTopsvg_Path" x="50" y="6"  />
            </g>
        </svg>
      </div>
    </div>
  );
}

export default PageTopsvg;
