import React, {useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Leaderboard from '../components/leaderboard/Leaderboard'
import MainMenu from '../components/MainMenu'
import NavBar from '../components/NavBar'
import Quiz from '../components/quiz/Quiz'
import Zone1 from '../components/zones/Zone1'
import Zone2 from '../components/zones/Zone2'
import Zone3 from '../components/zones/Zone3'
import Zone4 from '../components/zones/Zone4'
import Zone5 from '../components/zones/Zone5'


export default function MainContainer() {

  const [player, setPlayer] = useState("");

  const createPlayer = (newPlayer) => {
      setPlayer(newPlayer)
  }

  const clearPlayer = () => {
    setPlayer("")
  }

  return (
    <div>
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={ <MainMenu clearPlayer={clearPlayer} createPlayer={createPlayer} player={player}/> } />
          <Route path="/quiz" element={ <Quiz player={player}/>} />
          <Route path="/leaderboard" element={ <Leaderboard player={player}/> } />
          <Route path="/zone1" element={ <Zone1 player={player}/> } />
          <Route path="/zone2" element={ <Zone2 player={player}/> } />
          <Route path="/zone3" element={ <Zone3 player={player}/> } />
          <Route path="/zone4" element={ <Zone4 player={player}/> } />
          <Route path="/zone5" element={ <Zone5 player={player}/> } />
          

        </Routes>

      </Router>
      

    </div>
  )
}
