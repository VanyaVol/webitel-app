import React from 'react';

import css from "./Header.module.css";
import webitelLogo from "./../../assets/images/webitelLogo.svg";
import burgerMenu from "./../../assets/images/burgerMenu.svg";



const Header = () => {
  return (
    <div className={css.Header}>
      <img src={burgerMenu} className={css.burgerMenu} />
      <img src={webitelLogo} alt='Webitel logo' className={css.webitelLogo} />
    </div>
  )
}

export default Header