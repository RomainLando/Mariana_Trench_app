import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
export default function NavBar() {
  return (
    <div>
        <div id='navbuttons'>
            <Link to ="/" ><button>Home</button></Link>
            <Link to ="/quiz" ><button>Quiz</button></Link>
            <Link to ="/leaderboard" ><button>Leaderboard</button></Link>
        </div>
        
    
    </div>
  )
}
