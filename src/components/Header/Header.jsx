import React from 'react';
import styles from './Header.module.scss';
import {NavLink} from "react-router-dom";
import Button from "../Shared/Button/Button";
import logo from '../../assets/images/logo.png'
const Header = (props) => {

    return (
        <header className={styles.header}>
            <a href="#href"><img src={logo} alt="#"
                             className="logo"/></a>
                 <div  className={styles.auth}>
                     {props.isAuth ? <><div className={styles.login}>{props.login}</div>
                         <Button value={'logout'} typeClass={'aqua'} onClick={props.logout}/></>
                         :  <NavLink to={'/login'}> Login</ NavLink> }
                 </div>
        </header>
    );
}

export default Header;
