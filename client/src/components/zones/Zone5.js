import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Zone5.css";
import InfoDisplayPopUp from "../InfoDisplayPopup";

export default function Zone5() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="background5">
        <h4>Hadalpelagic Zone - The Trenches</h4>
        <div id="up-down">
          <Link to="/zone4">
            <button>Up</button>
          </Link>
        </div>
        <div>
          <input
            type="button"
            value="Click to Open Popup"
            onClick={togglePopup}
          />
          {isOpen && (
            <InfoDisplayPopUp
              content={
                <>
                  <b>This is where the title will go</b>
                  <p>
                    This is where the details will go!
                  </p>
                </>
              }
              handleClose={togglePopup}
            />
          )}
        </div>
        <img className="sub" src="./media/submarine.png"></img>
      </div>
    </>
  );
}
