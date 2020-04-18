import React from 'react';
import styles from "./Button.module.scss";
import preloaderImg from './preloader.gif'

const Button = (props) => {

    const {value = 'placeholder', typeClass = "", sizeClass = "", className = "", loading} = props;

    return (
        <button onClick={props.onClick}
                className={`${styles.button} ${typeClass && styles[typeClass]} ${sizeClass &&
                styles[sizeClass]} ${className && className}`}>
            {/*{loading && <img src={preloaderImg} className={styles.preloader} alt="preloader"/>}*/}
            {/*{!loading && value}*/}
            {loading ? <img src={preloaderImg} className={styles.preloader} alt="preloader"/> : value}
        </button>
    )

}

export default Button;