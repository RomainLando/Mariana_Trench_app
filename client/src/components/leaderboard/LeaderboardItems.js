import React from 'react'
import "./LeaderboardItems.css"

export default function LeaderboardItems({name, score, index}) {
  return (
    
        <p id="quiz_result_p">{index+1}. {name}: {score}/{5}</p>
        
    
    
  )
}
