import React, {useEffect, useState} from 'react'
import {getLeaderboard, postLeaderboard, deleteLeaderboard, putLeaderboard} from '../../services/LeaderBoardServices'
import LeaderboardContainer from './LeaderboardContainer'
import "./Leaderboard.css"
export default function Leaderboard() {

  const [leaderboard, setLeaderboard] = useState([])

  useEffect(()=>{
    getLeaderboard()
      .then((data) => {
        setLeaderboard(data)
      }
    )

  },[])

  const removeLeaderboard = (id) => {
    let temp = leaderboard.map(g => g);
    const returnedLeaderboard = temp.find((row) => row._id ===id)
    temp.splice(temp.indexOf(returnedLeaderboard),1);
    setLeaderboard(temp);
  }
  

  return (
    <div id='leaderboard_container'>
      <h4>Quiz Results</h4>
      <LeaderboardContainer 
      leaderboards = {leaderboard} 
      removeLeaderboard = {removeLeaderboard}
      deleteLeaderboard = {deleteLeaderboard}
        
      
      />

    </div>
  )
}
