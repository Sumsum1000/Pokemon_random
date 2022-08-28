import style from './button.module.scss'
import { useContext, useEffect } from 'react';
import { Card } from './card';
import { PokemonContext } from './pokemonContext';

export const Button = () => {

    const { 
        pokemons, 
        setPokemons, 
        currentCard, 
        setCurrentCard, 
        visible, 
        setVisibe ,
        fetchPokemon
    } = useContext(PokemonContext);

    const nextPokemonHandler = () => {
        // const newPokemon = fetch('https://pokeapi.co/api/v2/pokemon/2')
        // .then(result => result.json())
        // .then(data => console.log('data: ', data.name))
        
        fetchPokemon()
        console.log('visible: ', visible);
    }



    return(
        <button 
            className={style['btn']}
            onClick={nextPokemonHandler}
        >Next Pokemon</button>
    )
}