import style from './card2.module.scss';
import sample from '../graphics/pokemon_sample.png'

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useContext } from 'react';
import { PokemonContext } from './pokemonContext';

export const Card = () => {

    const { visible, currentCard } = useContext(PokemonContext)


    const cardVariants = {
        init: {
            scale: 0.5,
            opacity: 0
        },
        animation: {
            scale: 1,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 150,
                duration: 1
            }
        }
    }

    return(
        <AnimatePresence>
            {visible && <motion.div 
                    className={style['card-clipper']}
                    visible={visible}
                    variants={cardVariants}
                    initial='init'
                    animate='animation'
                    exit={{
                        x: -1000,
                        rotateY: 45,
                        opacity: 0,
                        transition: {
                            duration: 0.7
                        }
                    }}
                >
                    <motion.div className={style['card-container']}>
                        <h3>{currentCard.name}</h3>
                        <img src={currentCard.sprites.other.dream_world.front_default}/>
                        <div className={style['text-container']}>
                            <div className={style['experience-container']}>
                                <p>base experience:</p>
                                <p>{currentCard.base_experience}</p>
                            </div>
                            <div className={style['abilities-container']}>
                                <p>abilities:</p>
                                <ul> 
                                    <li>
                                        <p><strong>skill 1</strong></p>
                                    </li>
                                    <li>
                                        <strong>skill 2</strong>
                                    </li>
                                    <li>
                                    <strong>skill 3</strong>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
            </motion.div>}
        </AnimatePresence>
        
        
    )
}






{/* <div className={style['card-container']}>
<h3 className={style['my-size']}>My card</h3>
<img src={sample}/>
<div className={style['text-container']}>
    <div className={style['experience-container']}>
       <p>base experience:</p>
       <p>{x}</p>
    </div>
   <div className={style['abilities-container']}>
       <p>abilities:</p>
       <ul> 
           <li>
               <p><strong>skill 1</strong></p>
           </li>
           <li>
               <strong>skill 2</strong>
           </li>
           <li>
           <strong>skill 3</strong>
           </li>
       </ul>
   </div>
</div>
<div className={style['']}></div>
</div>  */}


// className={[style['my-color'], style['my-size']].join(' ')}