import React from 'react'
import { Link } from 'react-router-dom';

const Menu = ({button, setButton}) => {
  return (
    <div>
      <div>
        Menu
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

export default Menu;