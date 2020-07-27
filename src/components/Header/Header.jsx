import React from 'react';
import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <img
        src='https://img.icons8.com/wired/64/000000/social-network.png'
        alt='icon'
      />
    </header>
  );
};

export default Header;
