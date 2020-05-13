import {addMessage} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        state: state.dialogs,
    }
}
export default compose(
    connect(mapStateToProps, {addMessage}),
    withAuthRedirect
)(Dialogs);