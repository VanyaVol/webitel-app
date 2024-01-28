import React, { useEffect, useState } from 'react';

import webitel from './../../assets/images/webitelLogo.svg';
import menuBurger from "./../../assets/images/menu.svg";
import nightMode from "./../../assets/images/nightLogo.svg";

import css from "./Header.module.css";


const Header = () => {
  let [button, setButton] = useState(0);
  useEffect(()=>{
    console.log(button);
  },[button])
  

  return (
    <div className={css.headerBlock}>
      <div className={css.Header}>
        <img src={menuBurger} className={button >=1 ? `${css.menuHidden} `: `${css.burgerMenu}`} alt='Menu' onClick={(e)=>{e.preventDefault(); console.log('Work!' + button); setButton(button+1);}}/>
        <img src={webitel} className={css.webitelLogo} alt='Webitel' />
        <img src={nightMode} className={css.nightLogo} alt='Webitel' />
      </div>
      <div className={css.MenuBlock}>
        {/* Menu */}
      </div>
    </div>
  )
}

export default Header