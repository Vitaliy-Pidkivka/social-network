import React from 'react';
import styles from "./Button.module.scss";
import preloaderImg from './preloader.gif'

function  Button (props) {
    let typeClass = 'button';
    let sizeClass = 'button';
    let {value = 'placeholder', className = ' '} = props;
    if(props.type === 'aqua'){
        typeClass = 'aqua'
    } else if (props.type === 'purple'){
        typeClass = 'purple'
    } if(props.size === 'small'){
        sizeClass = 'small'
    }
    return(
            <button className={styles['button'] + ' ' + styles[typeClass]  + ' ' + styles[sizeClass] + ' ' + className}>
                {props.loading && <img src={preloaderImg} className={styles.preloader} alt="preloader"/>}
                {value}
            </button>
    )

}

export  default  Button;