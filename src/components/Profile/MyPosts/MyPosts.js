import React from 'react';
import styles from './MyPosts.module.scss'
import Post from "./Post/Post";
import Button from "../../Shared/Button/Button";

const MyPosts = (props) => {
    let newPostElement = React.createRef();
    const addPost = () => {
        // props.dispatch(addPostActionCreator())
        props.addPost()
        newPostElement.current.focus()
    }
    const removePost = () => {
        // props.dispatch(removePostActionCreator())
        props.removePost()
    }
    const onPostChange = (e) => {
        let text = newPostElement.current.value;
        // props.dispatch(onPostChangeActionCreator(text));
        props.onPostChange(text)
    }
    return (
        <div className={styles.myPosts}>
            <div className={styles['myPosts__title']}>
                <p>
                    My posts
                </p>
            </div>
            <div className={styles['newPost']}>
                <textarea ref={newPostElement} value={props.state.newPostText} onChange={onPostChange} type="text"
                          name="newPost" id="newPost"/>
                <Button onClick={addPost} value="Add message" typeClass="aqua"/>
                <Button onClick={removePost} value="Remove message" typeClass="purple"/>
            </div>
            <div className="posts">
                {props.state.posts.map((post ) => (<Post {...post} key={post.id}/>))}
            </div>
        </div>
    );
}

export default MyPosts;
