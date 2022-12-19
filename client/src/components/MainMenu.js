import React, {useState, useEffect} from 'react'
import MenuNavComponents from './NavBar'
import PlayerInfoForm from './PlayerInfoForm'
import './MainMenu.css'
import { Link } from 'react-router-dom'


export default function MainMenu() {
    const [data, setData] = useState([]);
    useEffect(() => {
        TrenchServices.getTrench()
            .then(info => setData(info))
    }, []);



    return (
        <>
            <div id="cloud1"></div>
            <div id="info">
                <h4> Main Menu</h4>
                <PlayerInfoForm />
                <Link to="/zone1" ><button>Lets explore!</button></Link>
            </div>
            <img id='sub1' src='../media/submarine.png' ></img>
            <section id="wavewrapper">
                <div id="wave1"></div>
                <div id="wave2"></div>
                <div id="wave3"></div>
                <div id="wave4"></div>
            </section>
            <div id="footer"></div>
        </>
    )
}
