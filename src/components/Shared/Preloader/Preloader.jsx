import React from "react";
import styles from './Preloader.module.scss'
const Preloader = ({big, className}) => {
    return(
        <div className={`${styles.preloader} ${big && styles.big} ${className || ''}`}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )

}

export  default  Preloader
