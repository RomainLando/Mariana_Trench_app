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
      <h4>Main Menu</h4>
      <div id="info">
        {!player.name ? (
          <PlayerInfoForm addPlayer={createPlayer} />
        ) : (
          <>
            <div>Welcome Captain {player.name}! </div>
            <div>You entered your height as {player.height}cm!</div>
            <div>
              <Link to="/zone1">
                <button>Lets explore!</button>
              </Link>
            </div>
            <div>
              <input
                type="button"
                onClick={clearPlayer}
                value={buttonText}
              ></input>
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
