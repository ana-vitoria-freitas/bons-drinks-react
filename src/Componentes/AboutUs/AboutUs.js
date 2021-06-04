import React from 'react'
import style from './AboutUs.module.css'
import {history} from '../../history'

const AboutUs = () =>{
    const handleClick = () =>{
        history.goBack();
    }
    return(
        <div className={style.container}>
        <h1 className={style.titulo}>About me</h1>
        <div className={style.gridInfo}>
            <img className={style.image}src="https://avatars.githubusercontent.com/u/69052949?v=4" alt=""/>
            <p className={style.paragraph}>My name is Ana Vitória and I am a current student of Web Development and also Computer Science at USP. I love to learn new tools that will give me the boost to the top!</p>
        </div>
        <br/>
        <br/>
        <br/>
        <button className={style.botao} onClick={handleClick}>Go back</button>
        </div>
    )
}


export default AboutUs;