import Header from "./components/Header"

import PokemonPage from "./pages/PokemonPage"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
// import PokeInfos from "./pages/PokeInfos"

function App() {


  return (
    <>
    <Header />
    <BrowserRouter>
    <Routes>
    <Route path='/Pokemon/:pokemonName' element={<PokemonPage />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
