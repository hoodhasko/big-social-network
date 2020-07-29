import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <ul>
                <li className={s.item}><NavLink to='/profile' activeClassName={s.active}>Profile</NavLink></li>
                <li className={s.item}><NavLink to='/dialogs' activeClassName={s.active}>Messages</NavLink></li>
                <li className={s.item}><NavLink to='/news' activeClassName={s.active}>News</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navbar;
