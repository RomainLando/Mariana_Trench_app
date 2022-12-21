import React from 'react'
import "./LeaderboardItems.css"
import spam from '../../media/icons/spam_tin_icon.png'
import manOWar from '../../media/icons/man_o_war_icon.png'
import lancetFish from '../../media/icons/lancet_fish_icon.png'
import cuttlefish from '../../media/icons/cuttlefish_icon.png'
import whiteShark from '../../media/icons/white_shark_icon.png'
import giantSquid from '../../media/icons/giant_squid_icon.png'

export default function LeaderboardItems({name, score, index}) {

  // const handleDeleteClick = function (e) {
  //   deleteLeaderboard(e.target.value);
  //   removeLeaderboard(e.target.value);
  // }

  const scoreRank = [
    {
      rank: "Spam",
      url: spam
    },
    {
      rank: "Jellyfish",
      url: manOWar

    },
    {
      rank: "Lancet Fish",
      url: lancetFish
    },
    {
      rank: "Cuttlefish",
      url: cuttlefish
    },
    {
      rank: "Shark",
      url: whiteShark
    },
    {
      rank: "Giant Squid",
      url: giantSquid
    }
  ]

  return (
        <div id='leaderboard_row_item'>
          <h4>{name}</h4>
          <div id="rank_image_container">
            <p>You achieved the rank of {scoreRank[score].rank}</p>
            <img id="rank_image" src={scoreRank[score].url} alt={scoreRank[index].rank}></img>
          </div>
            <p>You scored {score}/5!</p>

        </div>
        
    
    
  )
}
