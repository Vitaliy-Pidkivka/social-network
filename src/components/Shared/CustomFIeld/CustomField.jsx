import React from 'react'
import styles from './CustomField.module.scss'

const CustomField = ({input, meta, ...props}) => {
    let hasError = meta.touched && meta.error
    let typeField = props.types
    let {id} = props
    console.log(styles)
    return (
        <div className={`${styles['custom-field']} ${hasError ? styles.error : ''}`}>
            {typeField === 'input' ? <input {...input} {...props} className={styles.input} id={id}/>
            : typeField === 'textarea' ? <textarea {...input} {...props} id={id}/>
            : typeField === 'checkbox' ? <input type='checkbox' {...input} {...props} id={id} />
            : <span> </span>
            }
            {hasError && <div>{meta.error}</div>}
        </div>
    )
}
export default CustomField
