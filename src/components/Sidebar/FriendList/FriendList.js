import React from 'react';
import styles from './FriendList.module.scss'
import Friend from "./Friend/Friend";

const FriendList = (props) => {
    return (
        <div className={styles['friend-list']}>
            <Friend/>
            <Friend/>
            <Friend/>
            <Friend/>
        </div>
    );
}

export default FriendList;
