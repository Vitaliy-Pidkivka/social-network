import React from 'react';
import {addMessageCreator, onMessageChangeCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

    const onNewMessageChange = (messageBody) => {
        props.store.dispatch(onMessageChangeCreator(messageBody))
    }

    const onAddNewMessage = (id) => {
        props.store.dispatch(addMessageCreator(id))
    }

    return (
       <Dialogs onNewMessageChange={onNewMessageChange} onAddNewMessage={onAddNewMessage} state={props.store.getState().dialogs} match={props.match} />
    )
};

export default DialogsContainer;