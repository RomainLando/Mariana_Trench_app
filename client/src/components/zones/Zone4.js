import React from 'react'
import { Link } from 'react-router-dom'
import './Zone4.css'
export default function Zone4() {
  return (
    <div className='background4'>

      <h4>Abyssopelagic Zone - The Abyss</h4>
      <div id='up-down'>
        <Link to ="/zone3" ><button>Up</button></Link>
        <Link to ="/zone5" ><button>Down</button></Link>

      </div>
      <img id='sub' src='./media/submarine.png' ></img>
        {/* <img id='ripple1' className='ripple' src='./media/underwater_ripple.png'></img>
        <img id='ripple2' className='ripple' src='./media/underwater_ripple.png'></img>
        <img id='ripple3' className='ripple' src='./media/underwater_ripple.png'></img>
        <img id='ripple4' className='ripple' src='./media/underwater_ripple.png'></img> */}

    </div>
  )
}
