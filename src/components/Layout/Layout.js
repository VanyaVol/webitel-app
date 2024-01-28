import React, { useEffect, useState } from 'react';
import {Outlet} from "react-router-dom";

import Header from '../Header/Header';

import css from './Layout.module.css';


const Layout = () => {

  let [button, setButton] = useState(false);

  useEffect(()=>{
  },[button]);

  return (
    <div className={css.layoutBlock}>
      <Header button={button} setButton={setButton}/>
      <div className={css.layoutBlockOutlet} onClick={()=>{button===true ? setButton(false) : setButton(false)}}>
        <Outlet/>
      </div>
      
    </div>
  )
}

export default Layout