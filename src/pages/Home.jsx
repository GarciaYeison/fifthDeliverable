import React from 'react'
import '../components/pokedex/styles/home.css'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setTrainerGlobal } from '../store/slices/trainer.slice'

const Home = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(setTrainerGlobal(e.target.name.value.trim()))
        e.target.name.value = ''
        navigate('/pokedex')
    }

  return (
    <div className='home__container'>
        <img className='home__avatar' src="/Home/pokedex.png" alt="" />
        <h1 className='home__title'>¡Hi Trainer!</h1>
        <p className='home__welcome'>Give me your name to start</p>
        <form className='home__form' onSubmit={handleSubmit}>
            <input className='home__input' id='name' type="text" />
            <button className='home__botton'>Start</button>
        </form>
        <footer className='home__footer'>
        <div className='footer__black'>
            <div className='footer__circle'>
            </div>
        </div>
    </footer>
    </div>
  )
}

export default Home