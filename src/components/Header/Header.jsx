import React from 'react';
import styles from './Header.module.scss';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={styles.header}>
            <img src="https://i.pinimg.com/originals/f3/80/5c/f3805cbb9c45c2ad8e12fea81af79f29.png" alt="#"
                 className="logo"/>
                 <div  className={styles.auth}>
                     {props.isAuth ? <div className={styles.login}>{props.login}</div>
                         :  <NavLink to={'/login'}> Login</ NavLink> }
                 </div>
        </header>
    );
}

export default Header;
