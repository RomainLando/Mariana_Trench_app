import React from "react";
import './InfoDisplayPopup.css'
 
const StaticInfoDisplayPopup = props => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        {props.content}
      </div>
    </div>
  );
};
 
export default StaticInfoDisplayPopup;