import React from "react";
import style from './Footer.module.css';
import {history} from './../../history'

const Footer = () =>{
    const handleFaleConosco = () =>{
        history.push("/talkWithUs");
    }

    const handleAboutUs = () =>{
        history.push("/aboutUs");
    }
    return(
        <div>
            <div className={style.footer}>
                <div className={style.containerFooter}>
                    <p onClick={handleFaleConosco}className={style.footer1}>Talk with us</p>
                    <p onClick={handleAboutUs} className={style.footer2}>About us</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;