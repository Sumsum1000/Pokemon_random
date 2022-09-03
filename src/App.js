import logo from './logo.svg';
import './App.css';
import { Card } from './Components/card'
import { Title } from './Components/title';
import { Button } from './Components/buton';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useContext } from 'react';
import { PokemonContext } from './Components/pokemonContext';




function App() {

  const { setCurrentCard, visible, setCurrentImage, changeFrameColor} = useContext(PokemonContext);




  

  /* 
    action
    loader
  
  */

    

  return (
    <div className="App">
        <div className='root-container'>
            <div className='grid-container'>
                <Title />
                <Card/>
                <Button />
            </div>
        </div>    
    </div>
  );
}

export default App;
