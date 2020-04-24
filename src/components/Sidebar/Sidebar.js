import React from 'react';
import styles from './Sidebar.module.scss'
import {NavLink} from "react-router-dom";
import FriendListContainer from "./FriendList/FriendListContainer";

const Sidebar = (props) => {
    return (
        <div className={styles.sidebar}>
            <nav className={styles.nav}>
                <ul>
                    <li><NavLink className={styles['nav__btn']} to="/profile">Profile</NavLink></li>
                    <li><NavLink className={styles['nav__btn']} to="/users">Users</NavLink></li>
                    <li><NavLink className={`${styles['nav__btn']} ${styles.active}`} to="/dialogs">Messages</NavLink></li>
                    <li><NavLink className={styles['nav__btn']} to="/news">News</NavLink></li>
                    <li><NavLink className={styles['nav__btn']} to="/music">Music</NavLink></li>
                    <li><NavLink className={styles['nav__btn']} to="/settings">Settings</NavLink></li>
                </ul>
            </nav>
            <FriendListContainer store={props.store}/>
        </div>
    );
}

export default Sidebar;
