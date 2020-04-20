import React from 'react';
import FriendList from "./FriendList";
import {connect} from "react-redux";

// const FriendListContainer = (props) => {
//     return (
//         <FriendList state={props.store.getState().sidebar}/>
//     );
// }

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
