
import { useSelector } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import ProtectedRoutes from './components/ProtectedRoutes'
import HeaderPoke from './components/shared/HeaderPoke'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import PokedexInfo from './pages/PokedexInfo'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />

      <Route element={<ProtectedRoutes />} >
        <Route path='/pokedex' element={<Pokedex />} />
        <Route  path='/pokedex/:id' element={<PokedexInfo />} />
      </Route>
      </Routes>
    </div>
  )
}

export default App
