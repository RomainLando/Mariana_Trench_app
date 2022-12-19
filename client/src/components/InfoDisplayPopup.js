import React from "react";
import "./InfoDisplayPopup.css";

const InfoDisplayPopUp = ({content, handleClose}) => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={handleClose}>x</span>
        <div className="information" />
        <img src={content.detailImg} />
        <br></br>
        <h2>{content.title}</h2>
        <br></br>
        <p>{content.facts}</p>
        </div>
      </div>
  );
};

export default InfoDisplayPopUp;
