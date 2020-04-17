import React from 'react';
import styles from './MyPosts.module.scss'
import Post from "./Post/Post";
import Button from "../../Shared/Button/Button";
import {addPostActionCreator, onPostChangeActionCreator, removePostActionCreator} from "../../../redux/profileReducer";


const MyPosts = (props) => {
    let newPostElement = React.createRef();
    const addPost = () => {
        props.dispatch(addPostActionCreator())
        newPostElement.current.focus()
    }
    const removePost = () => {

        props.dispatch(removePostActionCreator())

    }
    const onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(onPostChangeActionCreator(text));
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
