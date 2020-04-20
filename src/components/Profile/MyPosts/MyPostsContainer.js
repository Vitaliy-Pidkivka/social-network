import React from 'react';
import {addPostActionCreator, onPostChangeActionCreator, removePostActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


// const MyPostsContainer = (props) => {
//     const addPost = () => {
//         props.store.dispatch(addPostActionCreator())
//     }
//     const removePost = () => {
//         props.store.dispatch(removePostActionCreator())
//     }
//     const onPostChange = (text) => {
//         props.store.dispatch(onPostChangeActionCreator(text));
//     }
//     return (
//         <MyPosts addPost={addPost} removePost={removePost} onPostChange={onPostChange} state={props.store.getState().profile}/>
//     );
// }

let mapStateToProps = (state) => {
    return {
        state: state.profile
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () =>  dispatch(addPostActionCreator()),
        removePost: ()=>  dispatch(removePostActionCreator()),
        onPostChange: (text) => dispatch(onPostChangeActionCreator(text))
    }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)


export default MyPostsContainer;
