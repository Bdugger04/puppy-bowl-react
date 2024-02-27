import {useState, useEffect} from 'react'
import axios from 'axios'

const API_URL = 'https://fsa-puppy-bowl.herokuapp.com/api/bdugger04/players'


export default function AllPlayers (){
  
  const [players, setPlayers] = useState([])

  useEffect(() => {
    
    async function fetchPlayers(){
     try { 
      
      
    }catch (e){
      console.error(e)
    }
    }
    fetchPlayers()
  }, [])

  console.log(players)
 
  if(players.length === 0){
    return <h1>Loading items ...</h1>
  }

  return (
    <div> hello </div>
  )
}