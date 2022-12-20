import React from 'react'
import LeaderboardItems from './LeaderboardItems'
import "./LeaderboardContainer.css"
export default function LeaderboardContainer({leaderboards}) {
    if (!leaderboards) return null;

  const leaderboardList = leaderboards.map((row, index)=>{
    return (
            

                <LeaderboardItems
                    key={index}
                    index = {index}
                    name={row.userName}
                    score = {row.score}
                />

           

        
    )
  })
  
  
  
    return (
    <div id="leaderboard_parent">{leaderboardList}</div>
  )
}
