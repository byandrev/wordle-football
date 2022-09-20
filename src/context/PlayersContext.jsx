import React, { useEffect, useState } from 'react'
import getPlayers from '../utils/getPlayers'

const PlayersContext = React.useContext({})

function PlayersContextProvider ({ children }) {
  const [players, setPlayers] = useState([])

  useEffect(() => {
    return async () => {
      const playersResponse = await getPlayers()
      setPlayers(playersResponse)
    }
  }, [])

  return (
    <MyContext.Provider value={players}>
      {children}
    </MyContext.Provider>
  )
}

export {
  PlayersContext,
  PlayersContextProvider
}
