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
   setLoader: () => {},
   frameColor: '',
   setFrameColor: () => {},
   frameColorList: '',
   currentImage: null,
   setCurrentImage: () => {},
   type: '',
   setType: () => {}
})

export const PokemonProvider = ({children}) => {

    const [currentCard, setCurrentCard] = useState({});
    const [visible, setVisible] = useState(true);
    const [loader, setLoader] = useState(false)
    const [frameColor, setFrameColor] = useState('back-ground');
    const [currentImage, setCurrentImage] = useState()
    const [type, setType] = useState('');
    const [frameColorList] = useState([
        'back-fire',
        'back-water', 
        'back-electric',
        'back-grass',
        'back-ice',
        'back-poison',
        'back-ground',
        'back-rock',
    ]);


    // useEffect(() => {
    //      setLoader(true)
    //     fetch('https://pokeapi.co/api/v2/pokemon/1')
    //     .then(result => result.json())
    //     .then(data => setCurrentCard(data))
    // }, [])

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/1')
        .then(result => result.json())
        .then(data => {
          setCurrentCard(data);
          setCurrentImage(data.sprites.other.dream_world.front_default);
          setType(data.types[0].type.name);
          changeFrameColor(data.types[0].type.name);
        })
      }, [])


    const changeFrameColor = (pokemonType) => {
        switch (pokemonType) {
            case 'fire':
                setFrameColor('back-fire');
                break;
            case 'water':   
                setFrameColor('back-water');
                break;
            case 'electric':   
                setFrameColor('back-electric');
                break;
            case 'grass':   
                setFrameColor('back-grass');
                break;
            case 'ice':   
                setFrameColor('back-ice');
                break;
            case 'poison':   
                setFrameColor('back-poison');
                break;
            case 'ground':   
                setFrameColor('back-ground');
                break;
            case 'rock':   
            setFrameColor('back-rock'); 
                break;
            default:
                setFrameColor('back-color'); 

        }
    }

    const createRandomNumber = () => {
        return Math.floor(Math.random() * 500);
    }

    const fetchPokemon = () => {
        setVisible(false)
        //pokemon change
        fetch(`https://pokeapi.co/api/v2/pokemon/${createRandomNumber()}`)
        .then(result => result.json())
        .then(data => {
            setCurrentCard(data)
            setCurrentImage(data.sprites.other.dream_world.front_default)
            setType(data.types[0].type.name);
            changeFrameColor(data.types[0].type.name)
        })  
        
        setTimeout(() => {
            setVisible(true)
        }, 1000)
    }


    // const fetchPokemon = () => {
    //     //console.log({frameColor});
    //     setVisible(false)
    //     setTimeout(async() => {
    //         setVisible(true)
    //         //pokemon change
    //          let result = await fetch(`https://pokeapi.co/api/v2/pokemon/${createRandomNumber()}`)
    //          result = result.json();
    //          //console.log({result});
    //          setCurrentCard(result)


    //     }, 1000)
    // }


    
    return(
        <PokemonContext.Provider
            value={{
                fetchPokemon,
                currentCard,
                visible,
                setCurrentCard,
                setVisible,
                loader, 
                setLoader,
                frameColor,
                setFrameColor,
                frameColorList,
                currentImage,
                setCurrentImage,
                type,
                setType
            }}
        >
            {children}
        </PokemonContext.Provider>
    )
}