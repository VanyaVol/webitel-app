import React from 'react'

import Wrapper from '../Wrapper/Wrapper';

import css from './../../App.module.css';

const Users = () => {
  return (
    <div className={`${css.wrapper}`}>
      <Wrapper name='Users'/>
      <div className={css.contentWrapper}>
        <div>
          Users
        </div>        
      </div>
    </div>
  )
}

export default Users;