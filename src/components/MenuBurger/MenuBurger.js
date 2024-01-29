import React from 'react'
import { Link } from 'react-router-dom';

import adminLogo from './../../assets/images/admin.svg';
import closeLogo from './../../assets/images/close.svg';

import css from './MenuBurger.module.css';

const MenuBurger = ({button, setButton}) => {
  return (
    <div className={css.menuHeaderMain}>
      <div className={css.menuHeader}>
        <div>
          <img src={adminLogo} className={`${css.menu}`} alt='Menu'/>
        </div>
        <div>
          <img src={closeLogo} className={`${css.close}`} alt='Close' onClick={()=>{button===true ? setButton(false) : setButton(false)}} />
        </div>
      </div>
      <div>
        <Link to={'users'} onClick={()=>{button===true ? setButton(false) : setButton(false)}}>Users</Link>
      </div>
      <div>
        <Link to={'resource'} onClick={()=>{button===true ? setButton(false) : setButton(false)}}>Resource</Link>
      </div>
    </div>
  )
}

export default MenuBurger;