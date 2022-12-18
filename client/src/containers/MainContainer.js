import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Leaderboard from '../components/leaderboard/Leaderboard'
import MainMenu from '../components/MainMenu'
import MenuNavComponents from '../components/NavBar'
import PlayerInfoForm from '../components/PlayerInfoForm'
import Quiz from '../components/quiz/Quiz'
import Zone1 from '../components/zones/Zone1'


export default function MainContainer() {
  return (
    <div>
      <Router>
        <MenuNavComponents/>
        <Routes>

          <Route path="/" element={ <MainMenu/> } />
          <Route path="/quiz" element={ <Quiz/>} />
          <Route path="/leaderboard" element={ <Leaderboard/> } />
          

        </Routes>

      </Router>

    </div>
  )
}
