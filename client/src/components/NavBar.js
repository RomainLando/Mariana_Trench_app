import React from 'react'
import { Link } from 'react-router-dom'

export default function MenuNavComponents() {
  return (
    <div>
        <div>
            <Link to ="/" ><button>Home</button></Link>
            <Link to ="/quiz" ><button>Quiz</button></Link>
            <Link to ="/leaderboard" ><button>Leaderboard</button></Link>
        </div>
        
    
    </div>
  )
}
