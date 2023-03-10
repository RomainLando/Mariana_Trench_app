import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Zone1.css";
import TrenchServices from "../../services/TrenchServices";
import InfoDisplayPopUp from "../InfoDisplayPopup";
import StaticInfoDisplayPopUp from "../StaticInfoDisplayPopup";
import sub from "../../media/submarine.png";
import tunnel from "../../media/icons/channel_tunnel_icon.png";
import zooplankton from "../../media/icons/zooplankton_icon.png";
import coral from "../../media/icons/brain_coral_icon.png";
import jelly from "../../media/icons/man_o_war_icon.png";
import shark from "../../media/icons/blue_shark_icon.png";
import down from "../../media/icons/down_icon.png";
import bary from "../../media/icons/zone_info_bary_icon.png"


export default function Zone1({ player }) {
  const [isOpen0, setIsOpen0] = useState(true);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);

  const [data, setData] = useState([]);

  useEffect(() => {
    TrenchServices.getTrench().then((info) => setData(info[0].zone1));
  }, []);

  const togglePopup0 = () => {
    setIsOpen0(!isOpen0);
  };

  const togglePopup1 = () => {
    setIsOpen1(!isOpen1);
  };

  const togglePopup2 = () => {
    setIsOpen2(!isOpen2);
  };

  const togglePopup3 = () => {
    setIsOpen3(!isOpen3);
  };

  const togglePopup4 = () => {
    setIsOpen4(!isOpen4);
  };

  const togglePopup5 = () => {
    setIsOpen5(!isOpen5);
  };

  const playerHeightCalculation = () => {
    const heightInCm = player.height;
    const layerDepthInCm = 200 * 100;
    const noOfPlayers = layerDepthInCm / heightInCm;
    return Math.round(noOfPlayers);
  };

  return (
    <div className="background1">
      <h2 className="zone_title1">Epipalagic Zone - The Sunlight Zone</h2>
      <div className="up-down">
        <Link to="/zone2">
        <button className="zone_button">
          Go Down
          </button>
        </Link>
        <button className="zone_button" onClick={togglePopup0}>
        Zone Info
        </button>
      </div>  
      <div>
  
        
        {isOpen0 && (
          <StaticInfoDisplayPopUp
            content={
              <>
                <img src="../media/barry.png"></img>
                <br></br>
                <h3>Welcome Captain {player.name} to the Sunlight Zone!</h3>
                <br></br>
                <p>
                  Hi {player.name} my name is Barry and I'll be your guide all
                  the way down to the bottom of the trench!
                </p>
                <br></br>
                <p>
                  Our first zone is the Sunlight Zone, also known as the
                  Epipelagic Zone!
                </p>
                <br></br>
                <p>
                  This level stretches down 200 metres, so about the height of 2
                  Big Bens stacked on top of each other
                  {!player.name ? (
                    <>! </>
                  ) : (
                    <>
                      , or {playerHeightCalculation()} Captain {player.name}'s
                      standing on top of each other!
                    </>
                  )}
                </p>
                <br></br>
                <p>
                  It's called the Sunlight Zone because water absorbs sunlight
                  really well, and so it's darkness below this depth!
                </p>
                <br></br>
                <p>
                  Tap or Click on the cross in the top right to close this box
                  and start exploring this level. Tap down when you're ready to
                  go deeper!
                </p>
              </>
            }
            handleClose={togglePopup0}
          />
        )}
      </div>
      <div className="element_container">
        <div>
          <button className="element" onClick={togglePopup1}>
            <img className="element_img" src={tunnel}></img>
          </button>
          {isOpen1 && (
            <InfoDisplayPopUp content={data[0]} handleClose={togglePopup1} />
          )}
        </div>
        <div>
          <button className="element" onClick={togglePopup2}>
            <img className="element_img" src={zooplankton}></img>
          </button>
          {isOpen2 && (
            <InfoDisplayPopUp content={data[1]} handleClose={togglePopup2} />
          )}
        </div>
        <div>
          <button className="element" onClick={togglePopup3}>
            <img className="element_img" src={coral}></img>
          </button>
          {isOpen3 && (
            <InfoDisplayPopUp content={data[2]} handleClose={togglePopup3} />
          )}
        </div>
        <div>
          <button className="element" onClick={togglePopup4}>
            <img className="element_img" src={jelly}></img>
          </button>
          {isOpen4 && (
            <InfoDisplayPopUp content={data[3]} handleClose={togglePopup4} />
          )}
        </div>
        <div>
          <button className="element" onClick={togglePopup5}>
            <img className="element_img" src={shark}></img>
          </button>
          {isOpen5 && (
            <InfoDisplayPopUp content={data[4]} handleClose={togglePopup5} />
          )}
        </div>
      </div>

      <img className="sub" src={sub}></img>
      {/* <img id='ripple1' className='ripple' src='../../media/underwater_ripple.png'></img>
        <img id='ripple4' className='ripple' src='../../media/underwater_ripple.png'></img>  */}
    </div>
  );
}
