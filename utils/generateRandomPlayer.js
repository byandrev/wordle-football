import getPlayers from './getPlayers'

export default async function generateRandomPlayer () {
  const players = await getPlayers()
  const posRandom = Math.floor(Math.random() * players.length)
  return players[posRandom]
}
