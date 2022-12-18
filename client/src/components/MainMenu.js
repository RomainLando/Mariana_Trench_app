import React from 'react'
import MenuNavComponents from './NavBar'
import PlayerInfoForm from './PlayerInfoForm'
import './MainMenu.css'
import { Link } from 'react-router-dom'


export default function MainMenu() {
    return (
        <>
        <div>
            <h4> Main Menu</h4>
            <PlayerInfoForm/>
            <Link to ="/zone1" ><button>Lets explore!</button></Link>
        </div>
        <div className='waveContainer'>
        <img id='wave1' className='wave' src='./media/wave1_4.png'></img>
        <img id='wave2' className='wave' src='./media/wave1_3.png'></img>
        <img id='wave3' className='wave' src='./media/wave1_2.png'></img>
        <img id='wave4' className='wave' src='./media/wave1_1.png'></img>
        {/* <img id='wave5' className='wave' src='./media/wave5.png'></img> */}
        </div>
        </>
    )
}
