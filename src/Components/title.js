import style from './title.module.scss'
import logo from '../graphics/Pokemon_logo.png';

export const Title = () => {

    return(
        <div className={style['title-container']}>
            <img className={style['title-img']} src={logo}/>
            <span>Choose random</span>
        </div> 
    )
}