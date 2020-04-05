import React from 'react';
import styles from './MyPosts.module.scss'
import Post from "./Post/Post";

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
                <button className={styles['button']}>Add message</button>
                <button className={styles['button']}>Remove message</button>
            </div>
            <div className="posts">
                <Post message="Hi, how are yoy?" likes="15"/>
                <Post message="It's my new post" likes="20"/>
            </div>
        </div>
    );
}

export default MyPosts;
