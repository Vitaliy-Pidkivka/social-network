import {addMessageCreator, onMessageChangeCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);