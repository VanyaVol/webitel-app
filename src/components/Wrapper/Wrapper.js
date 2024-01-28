import React from 'react';

import css from './Wrapper.module.css';

const Wrapper = ({name}) => {
  return (
    <div className={css.wrapperBlock}>
      <div className={css.textWrapp}>
        {name}
      </div>
    </div>
  )
}

export default Wrapper;