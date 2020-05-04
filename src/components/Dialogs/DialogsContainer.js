import {addMessageCreator, onMessageChangeCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


let mapStateToProps = (state) => {
    return {
        state: state.dialogs,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        onNewMessageChange : (messageBody)=> dispatch(onMessageChangeCreator(messageBody)),
        onAddNewMessage: (id)=> dispatch(addMessageCreator(id))
    }
}

let AuthRedirectComponent = withAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export default DialogsContainer;