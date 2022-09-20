import { PlayersContextProvider } from './context/PlayersContext'
import Main from './components/Main'

function App () {
  return <PlayersContextProvider>
    <Main />
  </PlayersContextProvider>
}

export default App
