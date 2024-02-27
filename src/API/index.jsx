import axios from "axios"

const BASE_URL = 'https://fsa-puppy-bowl.herokuapp.com/api/bdugger04/players'

export const getAllPlayers = async () => {
  const { data } = await axios.get(BASE_URL)
  return data.data.players
}

export const addPlayer = async (player) => {await axios.post (BASE_URL, player)}


export const getSinglePlayer = async (playerId) => {
  const { data } = await axios.get(BASE_URL + '/' + playerId)
  return data.data.player
}


export const deletePlayer = async (playerId) => {
  await axios.post(BASE_URL + '/' + playerId)
}