import React from 'react';
import s from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <ul>
        <li className={s.item}>Profile</li>
        <li className={`{s.item} {s.active}`}>Messages</li>
        <li className={s.item}>Music</li>
      </ul>
    </nav>
  );
};

export default Navbar;
