import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Leaderboard from '../components/leaderboard/Leaderboard'
import MainMenu from '../components/MainMenu'
import NavBar from '../components/NavBar'
import PlayerInfoForm from '../components/PlayerInfoForm'
import Quiz from '../components/quiz/Quiz'
import Zone1 from '../components/zones/Zone1'
import Zone2 from '../components/zones/Zone2'
import Zone3 from '../components/zones/Zone3'
import Zone4 from '../components/zones/Zone4'
import Zone5 from '../components/zones/Zone5'


export default function MainContainer() {
  return (
    <div>
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={ <MainMenu/> } />
          <Route path="/quiz" element={ <Quiz/>} />
          <Route path="/leaderboard" element={ <Leaderboard/> } />
          <Route path="/zone1" element={ <Zone1/> } />
          <Route path="/zone2" element={ <Zone2/> } />
          <Route path="/zone3" element={ <Zone3/> } />
          <Route path="/zone4" element={ <Zone4/> } />
          <Route path="/zone5" element={ <Zone5/> } />
          

        </Routes>

      </Router>

    </div>
  )
}
