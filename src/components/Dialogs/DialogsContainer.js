// import React from 'react';
import {addMessageCreator, onMessageChangeCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        state: state.dialogs,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        onNewMessageChange : (messageBody)=> dispatch(onMessageChangeCreator(messageBody)),
        onAddNewMessage: (id)=> dispatch(addMessageCreator(id))
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
export default DialogsContainer;