import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Zone5.css";
import TrenchServices from "../../services/TrenchServices";
import InfoDisplayPopUp from "../InfoDisplayPopup";
import StaticInfoDisplayPopUp from "../StaticInfoDisplayPopup";
import sub from "../../media/submarine.png"
import waste from "../../media/icons/plastic_waste_icon.png"
import ship from "../../media/icons/shipwreck_icon.png"
import trieste from "../../media/icons/trieste_icon.png"
import snailfish from "../../media/icons/snailfish_icon.png"
import dumbo from "../../media/icons/dumbo_octopus_icon.png"
import combjelly from "../../media/icons/combjelly_icon.png"
import grenadier from "../../media/icons/Grenadier_icon.png"
import up from "../../media/icons/up_icon.png"

export default function Zone5() {
  
  const [isOpen0, setIsOpen0] = useState(true);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);

  const [data, setData] = useState([]);

  useEffect(() => {
    TrenchServices.getTrench().then((info) => setData(info[4].zone5));
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

  const togglePopup7 = () => {
    setIsOpen7(!isOpen7);
  };

  return (
    <>
      <div className="background5">
        <h2 id="zone5_title">Hadalpelagic Zone - The Trenches</h2>
      <div className="up-down">
          <Link to="/zone4">
          <button>
          <img className="upImg" src={up}></img>
          </button>
          </Link>
      </div>
       <div>
          <input
            type="button"
            value="Zone Information"
            onClick={togglePopup0}
          />
          {isOpen0 && (
            <StaticInfoDisplayPopUp
              content={
                <>
                  <img src="../media/barry.png"></img>
                  <br></br>
                  <h3>
                    This is where the title of the static level information will
                    go!
                  </h3>
                  <br></br>
                  <p>
                    This is where the details of the static level information
                    will go!
                  </p>
                  <br></br>
                  <p>Say hello to Barry!</p>
                </>
              }
              handleClose={togglePopup0}
            />
          )}
        </div>
        <div className="element_container5">
      <div>
        <button className="element5" onClick={togglePopup1}>
        <img className="element_img5" src={ship}></img>
        </button>
        {isOpen1 && (
          <InfoDisplayPopUp content={data[0]} handleClose={togglePopup1} />
        )}
      </div>
      <div className="element_container5"></div>
      <div>
        <button className="element5" onClick={togglePopup2}>
          <img className="element_img5" src={waste}></img>
        </button>
        {isOpen2 && (
          <InfoDisplayPopUp content={data[1]} handleClose={togglePopup2} />
        )}
      </div>
      <div>
        <button className="element5" onClick={togglePopup3}>
          <img className="element_img5" src={trieste}></img>
        </button>
        {isOpen3 && (
          <InfoDisplayPopUp content={data[2]} handleClose={togglePopup3} />
        )}
      </div>
      <div>
        <button className="element5" onClick={togglePopup4}>
          <img className="element_img5" src={snailfish}></img>
        </button>
        {isOpen4 && (
          <InfoDisplayPopUp content={data[3]} handleClose={togglePopup4} />
        )}
      </div>
      <div>
        <button className="element5" onClick={togglePopup5}>
          <img className="element_img5" src={dumbo}></img>
        </button>
        {isOpen5 && (
          <InfoDisplayPopUp content={data[4]} handleClose={togglePopup5} />
        )}
      </div>
      <div>
        <button className="element5" onClick={togglePopup6}>
          <img className="element_img5" src={combjelly}></img>
        </button>
        {isOpen6 && (
          <InfoDisplayPopUp content={data[5]} handleClose={togglePopup6} />
        )}
      </div>
      <div>
        <button className="element5" onClick={togglePopup7}>
          <img className="element_img5" src={grenadier}></img>
        </button>
        {isOpen7 && (
          <InfoDisplayPopUp content={data[6]} handleClose={togglePopup7} />
        )}
      </div>
      </div>
    <div className="quizButton">
          <Link to="/quiz"><button>Take a quiz!</button></Link>
    </div>
      <img className="sub" src={sub}></img>
    </div>
    
    </>
  );
}
