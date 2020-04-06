import React from 'react';
import styles from './Message.module.scss'


function Message(props) {
    if (props.opponent) {
        return (
            <div className={`${styles.message} ${styles.opponent}`}>
                <span className={styles['message__text']}>{props.message}</span> <button>Remove</button>
            </div>
        )
    }
    else {
        return (
            <div className={styles.message}>
                <span className={styles['message__text']}>{props.message}</span> <button>Remove</button>
            </div>
        )
    }
}

export default Message;