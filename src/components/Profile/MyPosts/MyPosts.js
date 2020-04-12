import React from 'react';
import styles from './MyPosts.module.scss'
import Post from "./Post/Post";
import Button from "../../Shared/Button/Button";



const MyPosts = (props) => {
    return (
        <div className={styles.myPosts}>
            <div className={styles['myPosts__title']}>
                <p>
                    My posts
                </p>
            </div>
            <div className={styles['newPost']}>
                <textarea type="text" name="newPost" id="newPost"/>
                <Button value="Add message" typeClass="aqua"/>
                <Button value="Remove message" typeClass="purple"/>
            </div>
            <div className="posts">
                {props.posts.map((post,index) => (<Post {...post} key={index}/>))}
            </div>
        </div>
    );
}

export default MyPosts;
