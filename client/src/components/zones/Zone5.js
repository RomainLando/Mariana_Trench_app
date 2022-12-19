import React from 'react'
import { Link } from 'react-router-dom'
import './Zone5.css'

export default function Zone5() {
  return (
    <div className='background5'>
        <h4>Hadalpelagic Zone - The Trenches</h4>
        <div id='up-down'>
          <Link to ="/zone4" ><button>Up</button></Link>
        </div>

        <img className='sub' src='./media/submarine.png' ></img>
    
    </div>
  )
}
