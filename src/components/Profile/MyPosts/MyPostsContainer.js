import React from 'react';
import {addPostActionCreator, onPostChangeActionCreator, removePostActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
    const addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }
    const removePost = () => {
        props.store.dispatch(removePostActionCreator())
    }
    const onPostChange = (text) => {
        props.store.dispatch(onPostChangeActionCreator(text));
    }
    return (
        <MyPosts addPost={addPost} removePost={removePost} onPostChange={onPostChange} state={props.store.getState().profile}/>
    );
}

export default MyPostsContainer;
