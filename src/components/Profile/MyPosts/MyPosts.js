import React from 'react';
import styles from './MyPosts.module.scss'
import Post from "./Post/Post";
import Button from "../../Shared/Button/Button";


const MyPosts = (props) => {
    let newPostElement = React.createRef();
    const addPost = () => {
        const action = {type: "ADD-POST"};
        props.dispatch(action)
        newPostElement.current.focus()
    }
    const removePost = () => {
        const action = {type: "REMOVE-POST"};
        props.dispatch(action)

    }
    const onPostChange = () => {
        let text = newPostElement.current.value;
        const action = {type: "UPDATE-NEW-POST-TEXT", text: text};
        props.dispatch(action);
    }

    return (
        <div className={styles.myPosts}>
            <div className={styles['myPosts__title']}>
                <p>
                    My posts
                </p>
            </div>
            <div className={styles['newPost']}>
                <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange} type="text"
                          name="newPost" id="newPost"/>
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
