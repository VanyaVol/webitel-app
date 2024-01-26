import React from 'react'
import background from './../../../assets/images/background.png';
import css from './StartPage.module.css';

const StartPage = () => {
  return (
    <div className={css.preMenu}>
      <div className={css.menu}>
          <img src={background} className={css.background} alt='background' />
      </div>
    </div>
  )
}

export default StartPage