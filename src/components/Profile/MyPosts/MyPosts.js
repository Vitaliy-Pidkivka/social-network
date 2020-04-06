import React from 'react';
import styles from './MyPosts.module.scss'
import Post from "./Post/Post";
import Button from "../../Shared/Button/Button";

function MyPosts(props) {
    return (
        <div className={styles.myPosts}>
            <div className={styles['myPosts__title']}>
                <p>
                    My posts
                </p>
            </div>
            <div className={styles['newPost']}>
                <textarea type="text" name="newPost" id="newPost"/>
                <Button value="Add message" type="aqua" loading={true} />
                <Button value="Remove message" type="purple" />
            </div>
            <div className="posts">
                <Post message="Hi, how are yoy?" likes="15"/>
                <Post message="It's my new post" likes="20"/>
            </div>
        </div>
    );
}

export default MyPosts;
