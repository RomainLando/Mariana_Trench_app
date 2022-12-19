import React from 'react'

import UpDownButtons from '../UpDownButtons'
import './Zone1.css'
import {useState, useEffect} from 'react';

import { Link } from 'react-router-dom'
import App from '../../App';
import TrenchServices from '../../services/TrenchServices';

export default function Zone1 () {
  const [data, setData] = useState([]);
  useEffect (() => {
    TrenchServices.getTrench()
    .then (info => setData(info))
  }, []);

  return (
  
    <div className='background1' >
        <h2 id="zone-title" >Epipalagic Zone - The Sunlight Zone</h2>
        <img id='sub' src='./media/submarine.png' ></img>
        <img id='ripple1' className='ripple' src='./media/underwater_ripple.png'></img>
        <img id='ripple2' className='ripple' src='./media/underwater_ripple.png'></img>
        <img id='ripple3' className='ripple' src='./media/underwater_ripple.png'></img>
        <img id='ripple4' className='ripple' src='./media/underwater_ripple.png'></img>
        <Link to ="/zone2" ><button>Down</button></Link>
    </div>
  )}


  