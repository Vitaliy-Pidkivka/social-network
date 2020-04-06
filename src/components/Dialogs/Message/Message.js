import React from 'react';
import styles from './Message.module.scss'
import Button from "../../Shared/Button/Button";


function Message(props) {
    if (props.opponent) {
        return (
            <div className={`${styles.message} ${styles.opponent}`}>
                <span className={styles['message__text']}>{props.message}</span> <Button value="remove" size="small" type="aqua"  loading={true} />
            </div>
        )
    }
    else {
        return (
            <div className={styles.message}>
                <span className={styles['message__text']}>{props.message}</span> <Button value="remove" size="small" type="aqua"/>
            </div>
        )
    }
}

export default Message;