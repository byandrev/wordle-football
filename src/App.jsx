import { useEffect, useState } from 'react'

import Header from './components/Header'
import Search from './components/Search'

import getPlayers from './utils/getPlayers'
import generateRandomPlayer from './utils/generateRandomPlayer'
import PlayersSelecteds from './components/PlayersSelecteds'

function App () {
  const [players, setPlayers] = useState([])
  const [playerSelected, setPlayerSelected] = useState(null)
  const [playerAnswer, setPlayerAnswer] = useState(null)
  const [playersHistory, setPlayersHistory] = useState([])
  const [win, setWin] = useState(false)

  useEffect(() => {
    return async () => {
      const playersRes = await getPlayers()
      setPlayers(playersRes)
      setPlayerAnswer(generateRandomPlayer(playersRes))
    }
  }, [])

  useEffect(() => {
    if (playerSelected && players.indexOf(playerAnswer) !== -1) {
      setPlayersHistory([...playersHistory, playerSelected])
    }

    if (playerAnswer && playerSelected.id === playerAnswer.id) {
      console.log('WIN')
      setWin(true)
    }
  }, [playerSelected])

  if (playerAnswer) {
    console.log(playerAnswer)
  }

  return <>
    <Header />
    <Search players={players} win={win} setPlayerSelected={setPlayerSelected} playerAnswer={playerAnswer} playersHistory={playersHistory} />
    <PlayersSelecteds players={playersHistory} playerAnswer={playerAnswer} />
  </>
}

export default App
