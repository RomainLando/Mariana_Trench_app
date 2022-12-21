import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Zone2.css";
import TrenchServices from "../../services/TrenchServices";
import InfoDisplayPopUp from "../InfoDisplayPopup";
import StaticInfoDisplayPopUp from "../StaticInfoDisplayPopup";
import sub from "../../media/submarine.png";
import scuba from "../../media/icons/scuba_diver_icon.png";
import lancet from "../../media/icons/lancet_fish_icon.png";
import cuttlefish from "../../media/icons/cuttlefish_icon.png";
import wolfeel from "../../media/icons/wolf_eel_icon.png";
import viperfish from "../../media/icons/viperfish_icon.png";
import up from "../../media/icons/up_icon.png";
import down from "../../media/icons/down_icon.png";
import bary from "../../media/icons/zone_info_bary_icon.png";

export default function Zone2({ player }) {
  const [isOpen0, setIsOpen0] = useState(true);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);

  const [data, setData] = useState([]);

  useEffect(() => {
    TrenchServices.getTrench().then((info) => setData(info[1].zone2));
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
    const layerDepthInCm = 1000 * 100;
    const noOfPlayers = layerDepthInCm / heightInCm;
    return Math.round(noOfPlayers);
  };

  return (
    <div className="background2">
      <h2 className="zone_title">Mesopelagic Zone - The Twilight Zone</h2>
      <div className="up-down">
        <Link to="/zone1">
          <button className="zone_button">
          Go Up 
          </button>
        </Link>
        <Link to="/zone3">
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
                <h3>Welcome Captain {player.name} to the Twilight Zone!</h3>
                <br></br>
                <p>
                  Our next zone is the Twilight Zone, also known as the
                  Mesopelagic Zone!
                </p>
                <br></br>
                <p>
                  This level stretches from 200 metres, down to 1000 metres, so
                  about the height of 3 Eiffel Towers stacked on top of each
                  other
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
                  It's cold and dark in this region, as the light and heat from
                  the sun fade away, and the only real light coming from
                  creatures that glow in the dark.
                </p>
                <br></br>
                <p>
                  It may be dark but it's still busy! Recent studies have shown
                  there may be ten times as many fish as previously thought at
                  this level - more than the rest of the ocean combined!
                </p>
                <br></br>
                <p>
                  Tap or Click on the cross in the top right to close this box
                  and see what you will find!
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
          <img className="element_img" src={scuba}></img>
        </button>
        {isOpen1 && (
          <InfoDisplayPopUp content={data[0]} handleClose={togglePopup1} />
        )}
      </div>
      <div>
        <button className="element" onClick={togglePopup2}>
          <img className="element_img" src={lancet}></img>
        </button>
        {isOpen2 && (
          <InfoDisplayPopUp content={data[1]} handleClose={togglePopup2} />
        )}
      </div>
      <div>
        <button className="element" onClick={togglePopup3}>
          <img className="element_img" src={cuttlefish}></img>
        </button>
        {isOpen3 && (
          <InfoDisplayPopUp content={data[2]} handleClose={togglePopup3} />
        )}
      </div>
      <div>
        <button className="element" onClick={togglePopup4}>
          <img className="element_img" src={wolfeel}></img>
        </button>
        {isOpen4 && (
          <InfoDisplayPopUp content={data[3]} handleClose={togglePopup4} />
        )}
      </div>
      <div>
        <button className="element" onClick={togglePopup5}>
          <img className="element_img" src={viperfish}></img>
        </button>
        {isOpen5 && (
          <InfoDisplayPopUp content={data[4]} handleClose={togglePopup5} />
        )}
      </div>
      </div>
      <img className="sub" src={sub}></img>
      {/* <img id='ripple1' className='ripple' src='./media/underwater_ripple.png'></img>
        <img id='ripple2' className='ripple' src='./media/underwater_ripple.png'></img>
        <img id='ripple3' className='ripple' src='./media/underwater_ripple.png'></img>
        <img id='ripple4' className='ripple' src='./media/underwater_ripple.png'></img> */}
    </div>
  );
}
