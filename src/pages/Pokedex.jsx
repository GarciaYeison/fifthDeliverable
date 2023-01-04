 
import axios from 'axios'
import '../components/pokedex/styles/pokedex.css'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Pagination from '../components/pokedex/Pagination'
import PokeCard from '../components/pokedex/PokeCard'

const Pokedex = () => {

  const {trainer} = useSelector(state => state)

  const [pokemons, setPokemons] = useState()
  const [types, setTypes] = useState()
  const [typeSlected, setTypeSelected] = useState('All pokemons')

  const navigate = useNavigate()

  useEffect(() => {
    if(typeSlected !== "All pokemons"){
        axios.get(typeSlected)
        .then(res => setPokemons(res.data.pokemon.map(e => e.pokemon)))
        .catch(err => console.log(err))
    }else{
      const URL = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=1000000'
      axios.get(URL)
      .then(res => setPokemons(res.data.results))
      .catch(err => console.log(err))
    }
  },[typeSlected])

  useEffect(() => {
    const URL = 'https://pokeapi.co/api/v2/type'
    axios.get(URL)
    .then(res => setTypes(res.data.results))
    .catch(err => console.log(err))
  }, [])
  

  const handleSubmit = e =>{
      e.preventDefault()
      const input=e.target.search.value.trim().toLowerCase()
      navigate(`/pokedex/${input}`)
  }

  const handleChange = e =>{
      setTypeSelected(e.target.value)
      setPage(1)
  }

  const [page, setPage] = useState(1)
  const [pokePerPage, setPokePerPage] = useState(8)
  const initialPoke = (page - 1) * pokePerPage
  const finalPoke = page * pokePerPage
  const maxPage = pokemons && Math.ceil(pokemons.length / pokePerPage) 

  return (
    <div className='pokedex__home'>
      <h2 className='pokedex__title'>Welcome {trainer}, here you cand find your favorite pokemon.</h2>
      <div className='pokedex__home-container'>
      <form className='pokedex__form' onSubmit={handleSubmit}>
        <input className='pokedex__input' id='search' type="text" />
        <button className='pokedex__botton'>Search</button>
      </form>
      <select className='pokedex__option' onChange={handleChange}>
        <option  value="All pokemons">All pokemons</option>
        {
          types?.map(type => (
            <option key={type.url} value={type.url}>{type.name}</option>
          ))
        }
      </select>
      </div>
      <div className='poke_container'>
        {
          pokemons?.slice(initialPoke, finalPoke).map(poke => (
            <PokeCard 
            key={poke.url} 
            url={poke.url}
            />
          ))
        }
      </div>
      <Pagination 
      page={page} 
      maxPage={maxPage} 
      setPage={setPage}
      />
    </div>
  )
}

export default Pokedex