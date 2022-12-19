import React, { useState, useEffect} from "react";
import { Link } from 'react-router-dom'
import './Zone5.css'
import TrenchServices from '../../services/TrenchServices';
import { Link } from "react-router-dom";
import InfoDisplayPopUp from "../InfoDisplayPopup";

export default function Zone5() {
  const [data, setData] = useState([]);
  useEffect(() => {
      TrenchServices.getTrench()
          .then(info => setData(info[4].zone4))
  }, []);

export default function Zone5() {
  const [isOpen0, setIsOpen0] = useState(true);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);


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
            value="Zone Information"
            onClick={togglePopup0}
          />
          {isOpen0 && (
            <InfoDisplayPopUp
              content={
                <>
                  <img src="../media/barry.png"></img>
                  <br></br>
                  <b>This is where the title will go</b>
                  <p>
                    This is where the details will go for the static information!
                  </p>
                </>
              }
              handleClose={togglePopup0}
            />
          )}
        </div>
        <div>
          <input
            type="button"
            value="Element1"
            onClick={togglePopup1}
          />
          {isOpen1 && (
            <InfoDisplayPopUp
              content={
                <>
                  <b>This is where the title will go</b>
                  <p>
                    This is where the details will go for Element1!
                  </p>
                </>
              }
              handleClose={togglePopup1}
            />
          )}
        </div>
        <div>
          <input
            type="button"
            value="Element2"
            onClick={togglePopup2}
          />
          {isOpen2 && (
            <InfoDisplayPopUp
              content={
                <>
                  <b>This is where the title will go</b>
                  <p>
                    This is where the details will go for Element2!
                  </p>
                </>
              }
              handleClose={togglePopup2}
            />
          )}
        </div>
        <div>
          <input
            type="button"
            value="Element3"
            onClick={togglePopup3}
          />
          {isOpen3 && (
            <InfoDisplayPopUp
              content={
                <>
                  <b>This is where the title will go</b>
                  <p>
                    This is where the details will go for Element3!
                  </p>
                </>
              }
              handleClose={togglePopup3}
            />
          )}
        </div>
        <div>
          <input
            type="button"
            value="Element4"
            onClick={togglePopup4}
          />
          {isOpen4 && (
            <InfoDisplayPopUp
              content={
                <>
                  <b>This is where the title will go</b>
                  <p>
                    This is where the details will go for Element4!
                  </p>
                </>
              }
              handleClose={togglePopup4}
            />
          )}
        </div>
        <div>
          <input
            type="button"
            value="Element5"
            onClick={togglePopup5}
          />
          {isOpen5 && (
            <InfoDisplayPopUp
              content={
                <>
                  <b>This is where the title will go</b>
                  <p>
                    This is where the details will go for Element5!
                  </p>
                </>
              }
              handleClose={togglePopup5}
            />
          )}
        </div>
        <img className="sub" src="./media/submarine.png"></img>
      </div>
    </>
  );
}
