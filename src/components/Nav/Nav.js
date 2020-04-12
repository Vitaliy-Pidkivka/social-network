import React from 'react';
import styles from './Nav.module.scss'
import {NavLink} from "react-router-dom";

const Nav = (props) => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li><NavLink className={styles['nav__btn']} to="/profile">Profile</NavLink></li>
                <li><NavLink className={`${styles['nav__btn']} ${styles.active}`} to="/dialogs">Messages</NavLink></li>
                <li><NavLink className={styles['nav__btn']} to="/news">News</NavLink></li>
                <li><NavLink className={styles['nav__btn']} to="/music">Music</NavLink></li>
                <li><NavLink className={styles['nav__btn']} to="/settings">Settings</NavLink></li>
            </ul>
        </nav>
    );
}

export default Nav;
