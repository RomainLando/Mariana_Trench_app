import React from "react";
import MenuNavComponents from "./NavBar";
import PlayerInfoForm from "./PlayerInfoForm";
import "./MainMenu.css";
import { Link } from "react-router-dom";
import sub from "../media/submarine.png";

export default function MainMenu({ createPlayer, clearPlayer, player }) {
  const buttonText =
    "Wait!  I'm not " + player.name + " or my height is wrong!";

  return (
    <>
      <div id="cloud1"></div>
      <h1 id="header">Welcome to the Mariana Trench Explorer</h1>
      <div id="info">
        {!player.name ? (
          <PlayerInfoForm addPlayer={createPlayer} />
        ) : (
          <>
            <h3>Welcome Captain {player.name}! </h3>
            <br></br>
            <div>You entered your height as {player.height}cm!</div>
            <br></br>
            <div>
              <Link to="/zone1">
                <button className="landingbutton" id="go">
                  Let's explore! Dive Dive Dive!
                </button>
              </Link>
            </div>
            <div>
              <button
                className="landingbutton"
                id="clear"
                onClick={clearPlayer}
              >
                {buttonText}
              </button>
            </div>
          </>
        )}
      </div>
      <img id="sub1" src={sub}></img>
      <section id="wavewrapper">
        <div id="wave1"></div>
        <div id="footer"></div>
        <div id="wave2"></div>
        <div id="wave3"></div>
        <div id="wave4"></div>
      </section>
    </>
  );
}
