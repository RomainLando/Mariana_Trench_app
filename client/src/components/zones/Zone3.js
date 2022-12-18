import React from 'react'
import { Link } from 'react-router-dom'
import './Zone3.css'
export default function Zone3() {
  return (
    <div className='background3'>
      <h4>Bathypelagic Zone - The Midnight Zone</h4>
      <div id='up-down'>
        <Link to ="/zone2" ><button>Up</button></Link>
        <Link to ="/zone4" ><button>Down</button></Link>

      </div>
      <img id='sub' src='./media/submarine.png' ></img>
        {/* <img id='ripple1' className='ripple' src='./media/underwater_ripple.png'></img>
        <img id='ripple2' className='ripple' src='./media/underwater_ripple.png'></img>
        <img id='ripple3' className='ripple' src='./media/underwater_ripple.png'></img>
        <img id='ripple4' className='ripple' src='./media/underwater_ripple.png'></img> */}

    </div>
  )
}
