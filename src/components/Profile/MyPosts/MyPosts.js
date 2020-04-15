import React from 'react';
import styles from './MyPosts.module.scss'
import Post from "./Post/Post";
import Button from "../../Shared/Button/Button";


const MyPosts = (props) => {
    let newPostElement = React.createRef();
    const addPost = () => {
        let newText = newPostElement.current.value;
        props.addPost(newText)
        newPostElement.current.value = '';
        newPostElement.current.focus()
    }
    const removePost= ()=> {
       props.removePost()

    }

    return (
        <div className={styles.myPosts}>
            <div className={styles['myPosts__title']}>
                <p>
                    My posts
                </p>
            </div>
            <div className={styles['newPost']}>
                <textarea ref={newPostElement} type="text" name="newPost" id="newPost"/>
                <Button onClick={addPost} value="Add message" typeClass="aqua"/>
                <Button onClick={removePost} value="Remove message" typeClass="purple"/>
            </div>
            <div className="posts">
                {props.posts.map((post, index) => (<Post {...post} key={index}/>))}
            </div>
        </div>
    );
}

export default MyPosts;
