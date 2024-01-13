import React from "react";
import '../styles/Header.css'

function Header() {
  return (
    <div className='header'>
      <div className='header__image' />
      <div>
        <h1 className='header__title'>Ivan Rojas</h1>
        <p className='header__text'>@k.ivan.r</p>
      </div>
    </div>
  );
}

export default Header;