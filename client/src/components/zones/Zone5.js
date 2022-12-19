import React from 'react'
import { Link } from 'react-router-dom'
import './Zone5.css'
import TrenchServices from '../../services/TrenchServices';
import {useState, useEffect} from 'react';

export default function Zone5() {
  const [data, setData] = useState([]);
  useEffect(() => {
      TrenchServices.getTrench()
          .then(info => setData(info[4].zone4))
  }, []);

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
