import axios from "axios"

const BASE_URL = 'https://fsa-puppy-bowl.herokuapp.com/api/bdugger04/players'

export const getAllPlayers = async () => {
  const { data } = await axios.get(BASE_URL)
  console.log('data', data)
  return data.data.players
}