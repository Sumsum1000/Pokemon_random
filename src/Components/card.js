import style from './card2.module.scss';
import sample from '../graphics/pokemon_sample.png'



export const Card = () => {
    const x = 129;

    // const cardVariants = {
    //     init: {
    //         scale: 0.2
    //     },
    //     animation: {
    //         scale: 1
    //     },
    //     transition: {
            
    //     }
    // }

    return(

            <div 
                className={style['card-clipper']}>
                    <div className={style['card-container']}>
                        <h3>Title</h3>
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
                    </div>
            </div>
    
 
        
        
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