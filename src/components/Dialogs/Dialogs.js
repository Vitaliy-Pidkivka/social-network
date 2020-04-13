import React from 'react';
import styles from './Dialogs.module.scss'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";





const Dialogs = (props) => {
    const {id} = props.match.params
    console.log(props)
    return (
        <div className={styles.dialogs}>
            <div className={styles['dialogs__items']}>
                {props.dialogs.dialogs.map((dialog, index) => (
                    <Dialog {...dialog} key={index}/>
                ))}
            </div>
            {id && <div className={styles['dialogs__messages']}>
                {(props.dialogs.messages[id] || []).map((item,index) => (
                    <Message {...item} key={index}/>
                ))}
            </div>}
        </div>
    )
}

export default Dialogs;