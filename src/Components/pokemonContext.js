import React, { useState, useEffect } from 'react';
import { Card } from './card';

export const PokemonContext = React.createContext({
   pokemons: [],
   visible: true,
   currentCard: null,
   setPokemons: () => {},
   setCurrentCard: () => {},
   setVisible: () => {},
   fetchPokemon: () => {},
   loader: false,
   setLoader: () => {}
})

export const PokemonProvider = ({children}) => {

    const [currentCard, setCurrentCard] = useState();
    const [visible, setVisible] = useState(true);
    const [loader, setLoader] = useState(false)


    // useEffect(() => {
    //      setLoader(true)
    //     fetch('https://pokeapi.co/api/v2/pokemon/1')
    //     .then(result => result.json())
    //     .then(data => setCurrentPokemon({name: data.name, isVisible: true}))
    // }, [])

    const fetchPokemon = () => {
        setVisible(false)
        setTimeout(() => {
            setVisible(true)
            //pokemon change
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