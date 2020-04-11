import React from 'react';
import styles from "./Button.module.scss";
import preloaderImg from './preloader.gif'

function  Button (props) {

    const {value = 'placeholder', className = ' ', typeClass = ' ', sizeClass, loading} = props;

    return(
            <button className={`${styles['button']} ${styles[typeClass]} ${styles[sizeClass]} ${className}}`}>
                {/*{loading && <img src={preloaderImg} className={styles.preloader} alt="preloader"/>}*/}
                {/*{!loading && value}*/}

                {loading ? <img src={preloaderImg} className={styles.preloader} alt="preloader"/> : value}
            </button>
    )

}

export  default  Button;