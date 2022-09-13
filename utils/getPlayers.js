export default async function getPlayers () {
  const res = await fetch(
    'https://api.jsonbin.io/v3/b/62fef19ee13e6063dc81f0f0'
  )
  const data = await res.json()
  console.log(data.record.players)
  return data.record.players
}
