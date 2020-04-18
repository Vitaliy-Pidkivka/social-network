import React from 'react';
import styles from './Dialogs.module.scss'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import Button from "../Shared/Button/Button";
import {addMessageCreator, onMessageChangeCreator} from "../../redux/dialogsReducer";



const Dialogs = (props) => {

    const {id} = props.match.params

    const onNewMessageChange = (e) => {
        let messageBody = e.target.value
        props.dispatch(onMessageChangeCreator(messageBody))
    }

    const onAddNewMessage = ()=>{
        props.dispatch(addMessageCreator(id))
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles['dialogs__items']}>
                {props.dialogs.dialogList.map((dialog, index) => (
                    <Dialog {...dialog} key={index}/>
                ))}
            </div>
            {id && <div className={styles['dialogs__messages']}>
                {(props.dialogs.messages[id] || []).map((item,index) => (
                    <Message {...item} key={index}/>
                ))}
                <textarea onChange={onNewMessageChange} value={props.dialogs.newMessageText} placeholder="Send your message..."/>
                <Button onClick={onAddNewMessage} value={'Send'} typeClass="aqua" sizeClass="small" className={styles['dialogs__btn']}/>
            </div>}
        </div>
    )
}

export default Dialogs;