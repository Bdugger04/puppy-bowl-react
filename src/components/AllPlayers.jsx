import { useEffect, useState } from "react";
import { getAllPlayers } from "../API/index"
import { useNavigate } from "react-router-dom";


// This function takes the fetch get requst from index.jsx and it then is run through the .map and put into our useState 

export default function AllPlayers() {
  const [players, setPlayers] = useState([])
  const navigate = useNavigate()

  getAllPlayers() // fetch function to retrieve all puppies
  
  useEffect(() => {
    async function updatePlayers() {
      try {
        const players = await getAllPlayers()
        setPlayers(players)
      } catch (e) {
        console.error(e)
      }
    }
    updatePlayers()
  }, [])

  return <main>{
    players.map((player) => {
      return <article key={player.id}>
       
        <h2 onClick={() => navigate(`/players/${player.id}`)}> 
          <img src={player.imageUrl} />
          {player.name}
        </h2>
      </article>
    })
  }</main>
}