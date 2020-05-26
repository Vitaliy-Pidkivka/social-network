import React from 'react';
import styles from "./Button.module.scss";

const Button = ({value,type,typeClass,sizeClass,className,imgSrc, imgClassName, onClick}) => {

    return (
        <button type={type || 'button'} onClick={onClick}
                className={`${styles.button} ${typeClass && styles[typeClass]} ${sizeClass &&
                styles[sizeClass]} ${className && className}`}>
            {value}
            {imgSrc && <img src={imgSrc} className={imgClassName} alt="img"/> }
        </button>
    )

}

export default Button;