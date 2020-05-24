import {profileApi} from "../api/api";

const ADD_POST = "ADD-POST";
const REMOVE_POST = "REMOVE-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_USER_STATUS = "SET-USER-STATUS";


let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likes: 15},
        {id: 2, message: "It's my new post", likes: 20},
        {id: 3, message: "Social network in progress....", likes: 52},
    ],
    profile: null,
    status: '',
}


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            if (action.newPostBody) {
                let newPostId = state.posts.map (post => post.id > state.startPostId && post.id + 1 )
                return {...state, posts: [...state.posts, {id: newPostId, message: action.newPostBody, likes: 0}],}
            } else {
                alert("You didn't write anything, please write the text")
                return state
            }
        }
        case REMOVE_POST: {
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.id)
            }
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_USER_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state
    }
}

export const addPost = (newPostBody) => ({type: ADD_POST, newPostBody});
export const removePost = (id) => ({type: REMOVE_POST, id});
export const setUserProfile = (profile) => (
    {type: SET_USER_PROFILE, profile}
);
export const setUserStatus = (status) => {
    return (
        {type: SET_USER_STATUS, status}
    );
}
//redux-thunk
export const setProfile = (userId) => (dispatch) => {
    profileApi.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data))
        })
}
export const getStatus = (userId) => (dispatch) => {
    profileApi.getUserStatus(userId)
        .then(response => {
            dispatch(setUserStatus(response.data))
        })
}
export const updateStatus = (status) => (dispatch) => {
    profileApi.updateUserStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserStatus(status))
            }
        })
}

export default profileReducer;