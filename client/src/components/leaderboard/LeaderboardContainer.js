import React from 'react'
import LeaderboardItems from './LeaderboardItems'
import "./LeaderboardContainer.css"
export default function LeaderboardContainer({leaderboards, removeLeaderboard, deleteLeaderboard}) {
    if (!leaderboards) return null;

  const leaderboardList = leaderboards.sort((a,b)=> {
    return (b.score -a.score)

  }).map((row, index)=>{
    return (
                <LeaderboardItems
                    key={index}
                    index = {index}
                    name={row.userName}
                    score = {row.score}
                    id = {row._id}
                    deleteLeaderboard = {deleteLeaderboard}
                    removeLeaderboard = {removeLeaderboard}
                />
        
    )
  })
    return (
    <div id="leaderboard_parent">{leaderboardList}</div>
  )
}
