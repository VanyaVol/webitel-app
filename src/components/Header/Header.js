import React from 'react';

import webitel from './../../assets/images/webitelLogo.svg';
import menuBurger from "./../../assets/images/menu.svg";
import nightMode from "./../../assets/images/nightLogo.svg";

import css from "./Header.module.css";


const Header = () => {
  return (
    <div className={css.Header}>
      <img src={menuBurger} className={css.burgerMenu} alt='Menu' />
      <img src={webitel} className={css.webitelLogo} alt='Webitel' />
      <img src={nightMode} className={css.nightLogo} alt='Webitel' />
    </div>
  )
}

export default Header