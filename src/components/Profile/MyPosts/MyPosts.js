import React from 'react';
import styles from './MyPosts.module.scss'
import Post from "./Post/Post";

function MyPosts() {
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
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    );
}

export default MyPosts;
