import React from 'react'
import {Players} from '../Players'
import PlayerCard from './PlayerCard'

const PlayerList = () => {
  return (
    <div style={{ display :'flex' , justifyContent :'space-around'}}>
        {
            Players.map((Player)=> 
            <PlayerCard Player={Player} key={Player.id} />)
        }
    </div>
  )
}

export default PlayerList