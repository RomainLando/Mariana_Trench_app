
import React from 'react'
import './Zone2.css'
import {useState, useEffect} from 'react';

import { Link } from 'react-router-dom'

import './Zone2.css'
export default function Zone2() {
  return (
    <div className='background2'>
      <h4>Mesopelagic Zone - The Twilight Zone</h4>
      <div id='up-down'>
        <Link to ="/zone1" ><button>Up</button></Link>
        <Link to ="/zone3" ><button>Down</button></Link>

      </div>
      <img className='sub' src='./media/submarine.png' ></img>
        {/* <img id='ripple1' className='ripple' src='./media/underwater_ripple.png'></img>
        <img id='ripple2' className='ripple' src='./media/underwater_ripple.png'></img>
        <img id='ripple3' className='ripple' src='./media/underwater_ripple.png'></img>
        <img id='ripple4' className='ripple' src='./media/underwater_ripple.png'></img> */}
    </div>
  )}