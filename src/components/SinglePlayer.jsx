import {useState, useEffect} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import { deletePlayer, getSinglePlayer } from '../API'


export default function SinglePlayer (){
 
  const navigate = useNavigate()
  const {id} =useParams
  const [player, setPlayer] = useState(null)
  
  // ------ useEffect -----------
  useEffect(() => {
    async function updatePlayer() {
      try {
        const player = await getSinglePlayer(id)
        setPlayer(player)
      } catch (e) {
        console.error(e)
      }
    }
    updatePlayer()
  }, [])


  // -------- Delete Handler -----------
  async function deleteHandler(playerId){
    await deletePlayer(playerId)
    navigate('/')
  }

  // ------------ Returns loading if there isnt a player ------------
  if (!player){
    return <div> Loading player {id} ....</div>
  }


  // ---------- return -------------
  return (

  <article key={player.id}>
    <h2>
      <img src={player.imageUrl}/>
      {player.name}
    </h2>
    <h3>{player.breed}</h3>
    <button onClick={() => deleteHandler(id)}>DELETE</button>

  </article>
  )


}