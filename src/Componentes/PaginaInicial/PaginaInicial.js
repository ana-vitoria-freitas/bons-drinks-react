import style from '../../App.module.css';
import React from 'react';
import Inicio from '../Inicio/Inicio';
import Forms from '../Forms/Forms';
import Footer from '../Footer/Footer';


const PaginaInicial = () => {

  return (<div className={style.bigContainer}>
  <Inicio props="0"/>
  <Forms/ >
  <Footer/>
  </div>);

}

//require é para coisas que estão na pasta local
export default PaginaInicial;