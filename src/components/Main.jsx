import React, { useContext } from 'react'

import Header from './Header'
//import { PlayersContext } from '../context/PlayersContext'

function Main () {
  //const players = useContext(PlayersContext)
  // const [playersSelecteds, setPlayersSelecteds] = useState([])
  // const [playerAnswer, setPlayerAnswer] = useState(null)
  console.log(players)

  // useEffect(() => {
  //   setPlayerAnswer(generateRandomPlayer())
  // }, [players])

  // const selectPlayer = (player) => {
  //   if (playersSelecteds.indexOf(player) !== -1) {
  //     alert('Ya esta seleccionado')
  //     return
  //   }

  //   setPlayersSelecteds([...playersSelecteds, player])
  // }

  // const generateRandomPlayer = () => {
  //   const posRandom = Math.floor(Math.random() * players.length)
  //   return players[posRandom]
  // }

  return <>
    <Header />

    {/* <span>{playerAnswer && playerAnswer.name}</span> */}

    {
      /*
      players.length !== 0
        ? <>
          <Search players={players} selectPlayer={selectPlayer} />
          <PlayersSelected players={playersSelecteds} playerAnswer={playerAnswer} />
        </>
        : <span>Loading...</span>
        */
    }
  </>
}

export default React.memo(Main)
