import React, {useEffect, useState} from 'react'
import './Zone1.css'
import { Link } from 'react-router-dom'
import TrenchServices from '../../services/TrenchServices';


export default function Zone1 () {
  const [data, setData] = useState([]);
  useEffect(() => {
      TrenchServices.getTrench()
          .then(info => setData(info[0].zone1))
  }, []);
  
  
  // const value1 = props.

  return (
    
    <div className='background1' >
        <h2 id="zone-title" >Epipalagic Zone - The Sunlight Zone</h2>
        <div id='up-down'>
          <Link to ="/zone2" ><button>Down</button></Link>
        </div>
        <img className='sub' src='./media/submarine.png' ></img>
        {/* <img id='ripple1' className='ripple' src='../../media/underwater_ripple.png'></img>
        <img id='ripple4' className='ripple' src='../../media/underwater_ripple.png'></img>  */}
    </div>
  )}


  