import React from 'react'
import { Link } from 'react-router-dom'
import './Zone3.css'
import TrenchServices from '../../services/TrenchServices';
import {useState, useEffect} from 'react';

export default function Zone3() {
  const [data, setData] = useState([]);
  useEffect(() => {
      TrenchServices.getTrench()
          .then(info => setData(info[2].zone3))
  }, []);
  return (
    <div className='background3'>
      <h4>Bathypelagic Zone - The Midnight Zone</h4>
      <div id='up-down'>
        <Link to ="/zone2" ><button>Up</button></Link>
        <Link to ="/zone4" ><button>Down</button></Link>

      </div>
      <img className='sub' src='./media/submarine.png' ></img>
        {/* <img id='ripple1' className='ripple' src='./media/underwater_ripple.png'></img>
        <img id='ripple2' className='ripple' src='./media/underwater_ripple.png'></img>
        <img id='ripple3' className='ripple' src='./media/underwater_ripple.png'></img>
        <img id='ripple4' className='ripple' src='./media/underwater_ripple.png'></img> */}

    </div>
  )
}
