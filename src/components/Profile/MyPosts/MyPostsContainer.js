// import React from 'react';
import {addPostActionCreator, onPostChangeActionCreator, removePostActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


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
