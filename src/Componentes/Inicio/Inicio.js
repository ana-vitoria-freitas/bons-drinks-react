import React from "react";
import style from './Inicio.module.css';

import {history} from '../../history'

const Inicio = ({props}) => {
  const handleLogOut = () =>{
    history.push("/");
  }

  const handleHome = () =>{
    window.location.reload();
  }
  const handleFavorites = () =>{
    history.push("/favorites");
  }
  return(
    <div className={style.containerGrid}>
      {props === "1" && <div className={style.grid}>
        <p onClick={handleHome}className={style.nav1}>Home</p>
        <p onClick={handleFavorites}className={style.nav2}>Favorites</p>
        <p onClick={handleLogOut}className={style.nav3}>Log out</p>
      </div>}
      {props === "0" && <div className={style.grid}>
        <p className={style.nav2}>Welcome to our Drink Store!</p>
      </div>}

    </div>
  );
}

export default Inicio;