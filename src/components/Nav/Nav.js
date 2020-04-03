import React from 'react';
import  styles from './Nav.module.scss'

function Nav() {
    return (
        <nav className={styles.nav}>
            <ul>
                <li><a href="#placeholder">Profile</a></li>
                <li><a href="#placeholder">Messages</a></li>
                <li><a href="#placeholder">News</a></li>
                <li><a href="#placeholder">Music</a></li>
                <li><a href="#placeholder">Settings</a></li>
            </ul>
        </nav>
    );
}

export default Nav;
