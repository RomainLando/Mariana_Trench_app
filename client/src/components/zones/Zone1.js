import React from 'react'
import './Zone1.css'
import { Link } from 'react-router-dom'

export default function Zone1() {
  return (
    <div className='background1' >
        <h2 id="zone-title" >Epipalagic Zone - The Sunlight Zone</h2>
        <div id='up-down'>
          <Link to ="/zone2" ><button>Down</button></Link>
        </div>
        <img id='sub' src='./media/submarine.png' ></img>
        {/* <img id='ripple1' className='ripple' src='../../media/underwater_ripple.png'></img>
        <img id='ripple4' className='ripple' src='../../media/underwater_ripple.png'></img>  */}
        

    </div>
  )
}
