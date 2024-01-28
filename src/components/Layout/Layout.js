import React from 'react'
import {Outlet} from "react-router-dom";

import Header from '../Header/Header';

import css from './Layout.module.css';


const Layout = () => {
  return (
    <div className={css.layoutBlock}>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default Layout