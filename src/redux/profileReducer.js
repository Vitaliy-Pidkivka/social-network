import {profileApi} from "../api/api";

const ADD_POST = "ADD-POST";
const REMOVE_POST = "REMOVE-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_USER_STATUS = "SET-USER-STATUS";


let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likes: 15},
        {id: 2, message: "It's my new post", likes: 20},
        {id: 3, message: "Social network in progress....", likes: 52},
    ],
    newPostText: 'social network in progress...',
    profile: null,
    status: '',
}


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let messageBody = state.newPostText
            if (state.newPostText) {
                return {...state, posts: [...state.posts, {id: 5, message: messageBody, likes: 0}], newPostText: ''}
            } else {
                alert("You didn't write anything, please write the text")
                return state
            }
        }
        case REMOVE_POST: {
            let stateCopy = {...state}
            stateCopy.posts.pop()
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            return {...state, newPostText: action.text}
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_USER_STATUS: {
            debugger
            return {...state,
                status: action.status}
        }
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const removePostActionCreator = () => ({type: REMOVE_POST});
export const onPostChangeActionCreator = (text) => (
    {type: UPDATE_NEW_POST_TEXT, text: text}
);
export const setUserProfile = (profile) => (
    {type: SET_USER_PROFILE, profile}
);
export const setUserStatus = (status) => (
    {type: SET_USER_STATUS, status}
);
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
            if(response.data.resultCode === 0){
                dispatch(setUserStatus(status))
            }
        })
}


export default profileReducer;