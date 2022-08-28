import React, { useState, useEffect } from 'react';
import { Card } from './card';

export const PokemonContext = React.createContext({
   pokemons: [],
   visible: true,
   currentCard: {},
   setPokemons: () => {},
   setCurrentCard: () => {},
   setVisible: () => {},
   fetchPokemon: () => {},
   loader: false,
   setLoader: () => {}
})

export const PokemonProvider = ({children}) => {

    const [currentCard, setCurrentCard] = useState({});
    const [visible, setVisible] = useState(true);
    const [loader, setLoader] = useState(false)


    // useEffect(() => {
    //      setLoader(true)
    //     fetch('https://pokeapi.co/api/v2/pokemon/1')
    //     .then(result => result.json())
    //     .then(data => setCurrentCard(data))
    // }, [])

    const createRandomNumber = () => {
        return Math.floor(Math.random() * 500);
    }

    const fetchPokemon = () => {
        setVisible(false)
        setTimeout(() => {
            setVisible(true)
            //pokemon change
             fetch(`https://pokeapi.co/api/v2/pokemon/${createRandomNumber()}`)
            .then(result => result.json())
            .then(data => setCurrentCard(data))
        }, 1000)
    }

    return(
        <PokemonContext.Provider
            value={{
                fetchPokemon,
                currentCard,
                visible,
                setCurrentCard,
                setVisible,
                loader, 
                setLoader
            }}
        >
            {children}
        </PokemonContext.Provider>
    )
}