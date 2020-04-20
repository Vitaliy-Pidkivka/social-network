import React from 'react';
import {addMessageCreator, onMessageChangeCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

//
// const DialogsContainer = (props) => {
//
//     const onNewMessageChange = (messageBody) => {
//         props.store.dispatch(onMessageChangeCreator(messageBody))
//     }
//
//     const onAddNewMessage = (id) => {
//         props.store.dispatch(addMessageCreator(id))
//     }
//
//     return (
//         <Dialogs onNewMessageChange={onNewMessageChange} onAddNewMessage={onAddNewMessage}
//                  state={props.store.getState().dialogs} match={props.match}/>
//     )
// };


let mapStateToProps = (state) => {
    return {
        state: state.dialogs
    }
}
let mapDispatchStateToProps = (dispatch) => {
    return {
        onNewMessageChange : (messageBody)=> dispatch(onMessageChangeCreator(messageBody)),
        onAddNewMessage: (id)=> dispatch(addMessageCreator(id))
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchStateToProps)(Dialogs)
export default DialogsContainer;