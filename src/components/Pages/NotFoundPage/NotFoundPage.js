import React from 'react'
import notFoundLogo from './../../../assets/images/404.svg';
import css from './NotFoundPage.module.css';
import globalStyles from './../../../App.module.css';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {

  return (
    <div className={css.notFound}>
      <img src={notFoundLogo} alt='404 not found' />
      <h2>Looks like you're lost</h2>
      <p>Sorry, we can't find the page you want.</p>
      <Link className={`${globalStyles.buttons} ${css.btn}`} to="/">Go back</Link>
    </div>
  )
}

export default NotFoundPage