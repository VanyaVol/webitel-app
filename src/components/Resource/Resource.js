import React from 'react';

import Wrapper from '../Wrapper/Wrapper';

import css from './../../App.module.css';

const Resource = () => {
  return (
    <div className={`${css.wrapper}`}>
      <Wrapper name='Resource'/>
      <div className={css.contentWrapper}>
        <div>
          Resource
        </div>        
      </div>
    </div>
  )
}

export default Resource