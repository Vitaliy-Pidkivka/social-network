import React from 'react'
import styles from './CustomField.module.scss'
import {Field} from "redux-form";


const CustomField = ({input, meta: {touched, error}, ...props}) => {
    let hasError = touched && error
    let typeField = props.types
    let {id} = props
    return (
        <div className={`${styles['custom-field']} ${hasError ? styles.error : ''}`}>
            {typeField === 'input' && <input {...input} {...props} className={styles.input} id={id}/>}
            {typeField === 'textarea' && <textarea {...input} {...props} id={id}/>}
            {typeField === 'checkbox' && <input type='checkbox' {...input} {...props} id={id}/>}
            {!typeField && <span> </span>}

            {hasError && <div>{error}</div>}
        </div>
    )
}

export const createField = (placeholder, name, types, component, validators, type, props = {}, text = 'label',
    className) => {
    const checkbox = type === 'checkbox';
    return <div className={className || ''}>
        <Field placeholder={placeholder}
               name={name}
               types={types}
               component={component}
               validate={validators}
               type={type}
               id={checkbox && name}
               {...props}
        />
        {checkbox && <label htmlFor={name}>{text}</label>}
    </div>
}

export default CustomField
