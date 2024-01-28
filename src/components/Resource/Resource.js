import React from 'react';

import Wrapper from '../Wrapper/Wrapper';

import cssResource from './Resource.module.css';
import css from './../../App.module.css';

const Resource = () => {
  return (
    <div className={`${css.wrapper}`}>
      <Wrapper name='Resource'/>
      <div className={cssResource.contentWrapper}>
        <div className={cssResource.flexBlock}>
          Resource
        </div>        
      </div>
    </div>
  )
}

export default Resource