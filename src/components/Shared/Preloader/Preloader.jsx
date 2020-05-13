import React from "react";
import styles from './Preloader.module.scss'
const Preloader = (props) => {

    return(
        <div className={`${styles.preloader} ${props.className ?  props.className : ''}`}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )

}

export  default  Preloader
