import {useState} from 'react'
import axios from 'axios'
import { useNavigate} from 'react-router-dom'

const BASE_URL = 'https://fsa-puppy-bowl.herokuapp.com/api/bdugger04/players'


// --------------- NewPlayerForm Component ---------------------
export default function NewPlayerForm (){
  
  // --------- USESTATE ---------------
  const [name, setName] = useState('')
  const [breed, setBreed] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const navigate = useNavigate()

  // ----------- CLEAR FORM --------------
  function clearForm(){
    setName('')
    setBreed('')
    setImageUrl('')
  }
  // --------  HANDLE SUBMIT FUNCTION ---------------
  async function handleSubmit(event){
    event.preventDefault()

    const payload = {
      name,
      breed,
      imageUrl
    }
  
  try {
    const {data} = await axios.post(BASE_URL, payload)
    navigate('/')

  } catch (err){
    console.error(err)
  }
  

  // ----------- NEW PLAYER FORM RETURN ------------------
  return (
    <form onSubmit={handleSubmit}> 
    <h1>Add Player</h1>
      <label>
        Name:
        <input name = 'name' value={name} onChange={(e) => setName(e.target.value)} />
      </label>

      <label>
        Breed
        <input name = 'breed' value={breed} onChange={(e) => setBreed(e.target.value)} />
      </label>

      <label>
        Image Url:
        <input name = 'imageUrl' value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
      </label>

      <button type='button' onClick={clearForm}>Clear Form</button>
      <button type='button' onClick={clearForm}> Clear Form</button>
    </form>
  )
}}