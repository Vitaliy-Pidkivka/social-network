import FriendList from "./FriendList";
import {connect} from "react-redux";

let mapStateToProps = (state) =>{
    return {
        state: state.sidebar
    }
}
let mapDispatchToProps = (dispatch) =>{
    return { }
}

const FriendListContainer  = connect(mapStateToProps,mapDispatchToProps)(FriendList)

export default FriendListContainer;
