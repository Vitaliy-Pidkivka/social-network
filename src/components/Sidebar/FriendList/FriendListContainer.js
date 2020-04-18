import React from 'react';
import FriendList from "./FriendList";

const FriendListContainer = (props) => {
    return (
        <FriendList state={props.store.getState().sidebar}/>
    );
}

export default FriendListContainer;
