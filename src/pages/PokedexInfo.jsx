import axios from 'axios'
import '../components/pokedex/styles/pokedexInfo.css'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const PokedexInfo = () => {

  const {id} = useParams()

  const [pokemon, setPokemon] = useState()

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}`
    axios.get(URL)
    .then(res => setPokemon(res.data))
    .catch(err => console.log(err))
  }, [id])

  console.log(pokemon)
  

  return (
    <div>
      <div className='pokedexInfo__item'>

      <div className={`pokedexInfo__img bg-${pokemon?.types[0].type.name}`}>
      <img className='pokedexInfo__avatar' src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
      </div>
      <div className='pokedexInfo__id'>
        <div className={`pokedexInfo__id-content color-${pokemon?.types[0].type.name}`}>#{pokemon?.id}</div>
      </div>

      <div className={`pokedexInfo__name color-${pokemon?.types[0].type.name}`}>
        <div className='pokedexInfo__line'></div>
        <h1>{pokemon?.name}</h1>
        <div className='pokedexInfo__line'></div>
      </div>

      <div className='pokedexInfo__features'>
        <ul className='pokedexInfo__features-list'>
          <li className='pokedexInfo__features-item'><span className='features__title'>Weight</span><span className='features__result'>{pokemon?.weight}</span></li>
          <li className='pokedexInfo__features-item'><span className='features__title'>Height</span><span className='features__result'>{pokemon?.height}</span></li>
        </ul>
      </div>

      <div className='pokedexInfo__description'>
        <div className='pokedexInfo__description1'>
          <h3>Type</h3>
          <div className='pokedexInfo__types'>
            {
              pokemon?.types.map(type =>(
                <div className={`pokedexInfo__type`} key={type.type.name}>{type.type.name}</div>
              ))
            }
          </div>
        </div>
        <div className='pokedexInfo__description1'>
          <h3>Abilities</h3>
          <div className='pokedexInfo__types'>
          {
              pokemon?.abilities.map(abilitie =>(
                <div className={`pokedexInfo__type`} key={abilitie.ability.name}>{abilitie.ability.name}</div>
              ))
            }
          </div>
        </div>
      </div>

      <div className='PokedexInfo__stats'>
        <div className='PokedexInfo__stats-title'>
        <h1>Stats</h1>
        <div className='PokedexInfo__stats-hr'></div>
        </div>
        <div className='pokedexInfo__stadistics'>
        {
              pokemon?.stats.map(stat =>(
                <div className='stats__div'>
                  <div className={`pokedexInfo__stat`} key={stat.stat.name}>
                  <h4>{stat.stat.name}:</h4>
                  <p className='stats-p'>{stat.base_stat}/150</p>
                </div>
                <div className='stats-space'>
                  <div className={`stats-item`} style={{ width: `${stat.base_stat / 1.5}%` }}></div>
                </div>
                </div>
              ))
            }
        </div>
      </div>
      </div>

      <div className='pokedexInfo__footer'>
      <div className='footer__title'>
        <h1>Movements</h1>
        <div className='footer__line'></div>
      </div>

      <div className='footer__movements'>
        {
          pokemon?.moves.map(move =>(
            <div className='move' key={move.move.name}>
              {move.move.name}
            </div>
          ))
        }
      </div>
      </div>
    </div>
  )
}

export default PokedexInfo