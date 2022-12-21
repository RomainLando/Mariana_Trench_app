import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Zone3.css";
import TrenchServices from "../../services/TrenchServices";
import InfoDisplayPopUp from "../InfoDisplayPopup";
import StaticInfoDisplayPopUp from "../StaticInfoDisplayPopup";
import sub from "../../media/submarine.png"
import titanic from "../../media/icons/titanic_icon.png"
import worm from "../../media/icons/zombie_worm_icon.png"
import shark from "../../media/icons/white_shark_icon.png"
import cable from "../../media/icons/undersea_cable_icon.png"
import anglerFish from "../../media/icons/angler_fish_icon.png"
import benthocodon from "../../media/icons/benthocodon_jellyfish_icon.png"
import up from "../../media/icons/up_icon.png";
import down from "../../media/icons/down_icon.png";
import bary from "../../media/icons/zone_info_bary_icon.png";

export default function Zone3({ player }) {
  const [isOpen0, setIsOpen0] = useState(true);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);

  const [data, setData] = useState([]);

  useEffect(() => {
    TrenchServices.getTrench().then((info) => setData(info[2].zone3));
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

  const togglePopup6 = () => {
    setIsOpen6(!isOpen6);
  };

  const playerHeightCalculation = () => {
    const heightInCm = player.height;
    const layerDepthInCm = 4000 * 100;
    const noOfPlayers = layerDepthInCm / heightInCm;
    return Math.round(noOfPlayers);
  };

  return (
    <div className='background3'>
      <h2 className="zone_title">Bathypelagic Zone - The Midnight Zone</h2>
      <div className="up-down">
        <Link to="/zone2">
          <button className="zone_button">
          Go Up 
          </button>
        </Link>
        <Link to="/zone4">
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
                <h3>Welcome Captain {player.name} to the Midnight Zone!</h3>
                <br></br>
                <p>
                  Our next zone is the Midnight Zone, also known as the
                  Bathypelagic Zone!
                </p>
                <br></br>
                <p>
                  This level stretches from 1000 metres, down to 4000 metres -
                  so about the height of 5 Burj Khalifa's (the tallest building
                  in the world) stacked on top of each other
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
                  Living creatures in this huge, dark region need to be able to
                  survive in the darkness, withstand cold temperatures and
                  massive pressure.
                </p>
                <br></br>
                <p>
                  The midnight zone is the largest habitat on the planet
                  accounting for 70% of all seawater, but because of how
                  difficult it is to get to and look around, we don't know much
                  about it, or what lives there.
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
            <img className="element_img" src={cable}></img>
          </button>
          {isOpen1 && (
            <InfoDisplayPopUp content={data[0]} handleClose={togglePopup1} />
          )}
        </div>
        <div>
          <button className="element" onClick={togglePopup2}>
            <img className="element_img" src={anglerFish}></img>
          </button>
          {isOpen2 && (
            <InfoDisplayPopUp content={data[1]} handleClose={togglePopup2} />
          )}
        </div>
        <div>
            <button className="element" onClick={togglePopup3}>
              <img className="element_img" src={benthocodon}></img>
            </button>
            {isOpen3 && (
              <InfoDisplayPopUp content={data[2]} handleClose={togglePopup3} />
            )}
          </div>
         
        <div>
          <button className="element" onClick={togglePopup4}>
            <img className="element_img" src={shark}></img>
          </button>
          {isOpen4 && (
            <InfoDisplayPopUp content={data[3]} handleClose={togglePopup4} />
          )}
        </div>
        <div>
          <button className="element" onClick={togglePopup5}>
            <img className="element_img" src={worm}></img>
          </button>
          {isOpen5 && (
            <InfoDisplayPopUp content={data[4]} handleClose={togglePopup5} />
          )}
        </div>
        <div>
          <button className="element" onClick={togglePopup6}>
            <img className="element_img" src={titanic}></img>
          </button>
          {isOpen6 && (
            <InfoDisplayPopUp content={data[5]} handleClose={togglePopup6} />
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
