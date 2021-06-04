import React from 'react';
import style from './Saudacao.module.css';
const Saudacao = ({saudacao}) => {
    return (
        <div>
            <p className={style.title}>Hey, {saudacao}</p>
        </div>
    )
}

export default Saudacao;