import React from 'react';
import styles from './Message.module.scss'
import Button from "../../Shared/Button/Button";


function Message(props) {
    const {opponent} = props
    const className = `${styles.message} ${opponent ? styles.opponent : ""}`
    return (
        <div className={className}>
            <span className={styles['message__text']}>{props.message}</span>
            <Button value="remove" sizeClass="small" typeClass="aqua"/>
        </div>
    )

}

export default Message;