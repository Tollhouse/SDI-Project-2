import './Battle.css'

import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'

import Combatant from '../Combatant/Combatant.jsx'

export default function Battle() {
  const [ playerOne, setPlayerOne ] = useState({});
  const [ playerTwo, setPlayerTwo ] = useState({});

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
      .then(res => res.json())
      .then(data => {
        setPlayerOne(data);
      })
  }, [])

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/gengar')
      .then(res => res.json())
      .then(data => {
        setPlayerTwo(data);
      })
  }, [])



  return (
    <>
      <h1>Battle</h1>
      {/* {console.log(playerOne)} */}
      <Combatant className='player-one' pokemonData={playerOne}></Combatant>
      <Combatant className='player-two' pokemonData={playerTwo}></Combatant>
    </>
  )
}
