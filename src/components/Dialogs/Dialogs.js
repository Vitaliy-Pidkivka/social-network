import React from 'react';
import styles from './Dialogs.module.scss'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import Button from "../Shared/Button/Button";


const Dialogs = (props) => {
    const {id} = props.match.params

    const onNewMessageChange = (e) => {
        let messageBody = e.target.value
        props.onNewMessageChange(messageBody)
    }

    const onAddNewMessage = () => {
        props.onAddNewMessage(id)
    }


    return (
        <div className={styles.dialogs}>
            <div className={styles['dialogs__items']}>
                {props.state.dialogList.map((dialog, index) => (
                    <Dialog {...dialog} key={index}/>
                ))}
            </div>
            {id && <div className={styles['dialogs__messages']}>
                {(props.state.messages[id] || []).map((item, index) => (
                    <Message {...item} key={index}/>
                ))}
                <textarea onChange={onNewMessageChange} value={props.state.newMessageText}
                          placeholder="Send your message..."/>
                <Button onClick={onAddNewMessage} value={'Send'} typeClass="aqua" sizeClass="small"
                        className={styles['dialogs__btn']}/>
            </div>}
        </div>
    )
};

export default Dialogs;