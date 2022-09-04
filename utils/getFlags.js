const url = 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/index.json'

export default async function getFlags () {
  const res = await fetch(url)
  const data = await res.json()
  return data
}
