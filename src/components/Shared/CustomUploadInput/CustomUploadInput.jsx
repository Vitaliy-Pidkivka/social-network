import React from 'react';
import styles from './CustomUploadInput.module.scss'

const CustomUploadInput = ({name,id,onChange,children,className}) =>{
    return (
        <>
            <input className={styles.input} type="file" name={name} onChange={onChange} id={id} />
            <label className={`${styles.label} ${className && className}`} htmlFor={id}>{children}</label>
         </>
    )
}

export default  CustomUploadInput;