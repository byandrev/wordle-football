export default async function getPlayers () {
  const res = await fetch('../data/players.json')
  return await res.json()
}
