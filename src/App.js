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
    setVisible(1);
    setCurrentCard(<Card visible={visible}/>);
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
