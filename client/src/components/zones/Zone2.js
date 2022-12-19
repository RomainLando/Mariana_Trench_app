import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Zone2.css'
import TrenchServices from '../../services/TrenchServices';
import InfoDisplayPopUp from "../InfoDisplayPopup";
import StaticInfoDisplayPopUp from "../StaticInfoDisplayPopup";
import sub from "../../media/submarine.png"

export default function Zone2() {
  const [isOpen0, setIsOpen0] = useState(true);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);

  const [data, setData] = useState([]);

  useEffect(() => {
      TrenchServices.getTrench().then(info => setData(info[1].zone2))
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

  return (
    <div className='background2'>
      <h4>Mesopelagic Zone - The Twilight Zone</h4>
      <div id='up-down'>
        <Link to ="/zone1" ><button>Up</button></Link>
        <Link to ="/zone3" ><button>Down</button></Link>
      </div>
      <div>
        <input type="button" value="Zone Information" onClick={togglePopup0} />
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
                  This is where the details of the static level information will
                  go!
                </p>
                <br></br>
                <p>Say hello to Barry!</p>
              </>
            }
            handleClose={togglePopup0}
          />
        )}
      </div>
      <div>
        <input type="button" value="Element1" onClick={togglePopup1} />
        {isOpen1 && (
          <InfoDisplayPopUp content={data[0]} handleClose={togglePopup1} />
        )}
      </div>
      <div>
        <input type="button" value="Element2" onClick={togglePopup2} />
        {isOpen2 && (
          <InfoDisplayPopUp content={data[1]} handleClose={togglePopup2} />
        )}
      </div>
      <div>
        <input type="button" value="Element3" onClick={togglePopup3} />
        {isOpen3 && (
          <InfoDisplayPopUp content={data[2]} handleClose={togglePopup3} />
        )}
      </div>
      <div>
        <input type="button" value="Element4" onClick={togglePopup4} />
        {isOpen4 && (
          <InfoDisplayPopUp content={data[3]} handleClose={togglePopup4} />
        )}
      </div>
      <div>
        <input type="button" value="Element5" onClick={togglePopup5} />
        {isOpen5 && (
          <InfoDisplayPopUp content={data[4]} handleClose={togglePopup5} />
        )}
      </div>
      <img className='sub' src={sub} ></img>
        {/* <img id='ripple1' className='ripple' src='./media/underwater_ripple.png'></img>
        <img id='ripple2' className='ripple' src='./media/underwater_ripple.png'></img>
        <img id='ripple3' className='ripple' src='./media/underwater_ripple.png'></img>
        <img id='ripple4' className='ripple' src='./media/underwater_ripple.png'></img> */}
    </div>
  )}