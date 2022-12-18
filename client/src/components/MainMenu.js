import React from 'react'
import MenuNavComponents from './NavBar'
import PlayerInfoForm from './PlayerInfoForm'
import { Link } from 'react-router-dom'


export default function MainMenu() {
    return (
        <div>
            <h4> Main Menu</h4>
            <PlayerInfoForm/>
            <Link to ="/zone1" ><button>Lets explore!</button></Link>
        </div>
    )
}
