import React from 'react';
import styles from './FriendList.module.scss'
import Friend from "./Friend/Friend";

const FriendList = (props) => {
    return (
        <div className={styles['friend-list']}>
            {props.state.friendList.map((item) => <Friend {...item} key={item.id}/>)}
        </div>
    );
}

export default FriendList;
