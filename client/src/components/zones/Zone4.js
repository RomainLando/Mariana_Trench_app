import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Zone4.css";
import TrenchServices from "../../services/TrenchServices";
import InfoDisplayPopUp from "../InfoDisplayPopup";
import StaticInfoDisplayPopUp from "../StaticInfoDisplayPopup";

import sub from "../../media/submarine.png"
import spam from "../../media/icons/spam_tin_icon.png"
import squid from "../../media/icons/giant_squid_icon.png"
import spider from "../../media/icons/sea_spider_icon.png"
import seaPig from "../../media/icons/sea_pig_icon.png"
import star from "../../media/icons/echinoderms_icon.png"
import up from "../../media/icons/up_icon.png";
import down from "../../media/icons/down_icon.png";


export default function Zone4({ player }) {
  const [isOpen0, setIsOpen0] = useState(true);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);

  const [data, setData] = useState([]);

  useEffect(() => {
    TrenchServices.getTrench().then((info) => setData(info[3].zone4));
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
    const layerDepthInCm = 6000 * 100;
    const noOfPlayers = layerDepthInCm / heightInCm;
    return Math.round(noOfPlayers);
  };
  return (
    <div className="background4">
      <h2 id="zone_title">Abyssopelagic Zone - The Abyss</h2>
      <div className="up-down">
        <Link to="/zone3">
          <button>
          <img className="upImg" src={up}></img>
          </button>
        </Link>
        <Link to="/zone5">
        <button>
          <img className="upImg" src={down}></img>
        </button>
        </Link>
      </div>
      <div>
        <input type="button" value="Zone Information" onClick={togglePopup0} />
        {isOpen0 && (
          <StaticInfoDisplayPopUp
            content={
              <>
                <img src="../media/barry.png"></img>
                <br></br>
                <h3>Welcome Captain {player.name} to the Abyssal Zone!</h3>
                <br></br>
                <p>
                  Our next zone is the Abyssal Zone, also known as the
                  Abyssopelagic Zone!
                </p>
                <br></br>
                <p>
                  This level stretches from 4000 metres, down to 6000 metres -
                  so about the height of 43 Great Pyramids of Giza stacked on
                  top of each other
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
                  The abyss is largely unexplored, and contains some very unique
                  life, specialised to survive at extreme pressure and total
                  darkness. Most of the seafloor is at this level.
                </p>
                <br></br>
                <p>
                  The seafloor is a landscape made up of mainly vast expanses of
                  flat plains, trenches and undersea volcanoes.
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
          <img className="element_img" src={spam}></img>
        </button>
        {isOpen1 && (
          <InfoDisplayPopUp content={data[0]} handleClose={togglePopup1} />
        )}
      </div>
      <div>
        <button className="element" onClick={togglePopup2}>
          <img className="element_img" src={squid}></img>
        </button>
        {isOpen2 && (
          <InfoDisplayPopUp content={data[1]} handleClose={togglePopup2} />
        )}
      </div>
      <div>
        <button className="element" onClick={togglePopup3}>
          <img className="element_img" src={spider}></img>
        </button>
        {isOpen3 && (
          <InfoDisplayPopUp content={data[2]} handleClose={togglePopup3} />
        )}
      </div>
      <div>
        <button className="element" onClick={togglePopup4}>
          <img className="element_img" src={seaPig}></img>
        </button>
        {isOpen4 && (
          <InfoDisplayPopUp content={data[3]} handleClose={togglePopup4} />
        )}
      </div>
      <div>
        <button className="element" onClick={togglePopup5}>
          <img className="element_img" src={star}></img>
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
