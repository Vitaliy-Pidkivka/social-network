import React from 'react';
import styles from './Header.module.scss';

const Header = (props) => {
    return (
        <header className={styles.header}>
            <img src="https://i.pinimg.com/originals/f3/80/5c/f3805cbb9c45c2ad8e12fea81af79f29.png" alt="#"
                 className="logo"/>
        </header>
    );
}

export default Header;
