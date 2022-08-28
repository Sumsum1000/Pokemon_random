import logo from './logo.svg';
import './App.css';
import { Card } from './Components/card'
import { Title } from './Components/title';
import { Button } from './Components/buton';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useContext } from 'react';
import { PokemonContext } from './Components/pokemonContext';




function App() {

  const { currentCard, setCurrentCard, visible, setVisible} = useContext(PokemonContext);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/9')
    .then(result => result.json())
    .then(data => setCurrentCard(data))
  }, [])

  useEffect(() => {
    console.log('visible: ', visible);
  }, [visible])

  /* 
    action
    loader
  
  */

    

  return (
    <div className="App">
        <div className='root-container'>
            <Title />
            <Card/>
            <Button />
        </div>    
    </div>
  );
}

export default App;
