import React from 'react';

import webitel from './../../assets/images/webitelLogo.svg';
import menuBurger from "./../../assets/images/menu.svg";
import nightMode from "./../../assets/images/nightLogo.svg";

import css from "./Header.module.css";
import MenuBurger from '../MenuBurger/MenuBurger';


const Header = ({button, setButton}) => {

  return (
    <div className={css.headerBlock}>
      <div className={css.Header} onClick={()=> {button===true?setButton(false):setButton(false)}}>
        <img src={menuBurger} className={`${css.burgerMenu}`} alt='Menu' onClick={(e)=>{e.preventDefault();  e.stopPropagation(); setButton(button===true?button=false:button=true);}}/>
        <img src={webitel} className={css.webitelLogo} alt='Webitel' />
        <img src={nightMode} className={css.nightLogo} alt='Webitel' />
      </div>
      <div className={button===true ? `${css.menuBlock}`:`${css.menuHidden}`}>
        <MenuBurger button={button} setButton={setButton}/>       
      </div>
    </div>
  )
}

export default Header