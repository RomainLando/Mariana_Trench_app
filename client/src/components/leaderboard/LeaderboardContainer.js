import React from 'react'
import LeaderboardItems from './LeaderboardItems'
import "./LeaderboardContainer.css"
export default function LeaderboardContainer({leaderboards}) {
    if (!leaderboards) return null;

  const sortLeaderboard = () => {
    const sortedLeaderboards = [...leaderboards]
    sortedLeaderboards.sort((a,b)=>{
      return (a.score - b.score)

    })

  }
  


  const leaderboardList = leaderboards.sort((a,b)=> {
    return (b.score -a.score)

  }).map((row, index)=>{
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
