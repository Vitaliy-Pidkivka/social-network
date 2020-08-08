import {profileApi} from "../api/api";
import {stopSubmit} from "redux-form";
import {PostType, ProfileType, PhotosType} from "../types/types";

const ADD_POST = "social-network/profile/ADD-POST";
const REMOVE_POST = "social-network/profile/REMOVE-POST";
const SET_USER_PROFILE = "social-network/profile/SET-USER-PROFILE";
const SET_USER_STATUS = "social-network/profile/SET-USER-STATUS";
const SAVE_AVATAR_SUCCESS = "social-network/profile/SAVE-AVATAR-SUCCESS";
const SET_EDIT_MODE = "social-network/profile/SET-EDIT-MODE";



let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likes: 15},
        {id: 2, message: "It's my new post", likes: 20},
        {id: 3, message: "Social network in progress....", likes: 52},
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: '',
    editMode: false,
    startPostId: 0
}

export type initialStateType  = typeof initialState

const profileReducer = (state = initialState, action:any):initialStateType => {
    switch (action.type) {
        case ADD_POST: {
            if (action.newPostBody) {
                let newPostId = state.posts.map(post => post.id > state.startPostId && post.id + 1)
                return {...state,
                    posts: [...state.posts, {id: newPostId, message: action.newPostBody, likes: 0}] as Array<PostType>,}
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
        case SAVE_AVATAR_SUCCESS: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos} as ProfileType
            }
        }
        case SET_EDIT_MODE: {
            return {
                ...state,
                editMode: action.editMode
            }
        }
        default:
            return state
    }
}


type AddPostActionType = {
    type: typeof ADD_POST,
    newPostBody: string
}
export const addPost = (newPostBody:string): AddPostActionType => ({type: ADD_POST, newPostBody});
type RemovePostActionType = {
    type: typeof REMOVE_POST,
    id: number
}
export const removePost = (id:number):RemovePostActionType => ({type: REMOVE_POST, id});
type SetUserProfileActionType = {
    type: typeof SET_USER_PROFILE,
    profile: ProfileType
}
export const setUserProfile = (profile: ProfileType):SetUserProfileActionType => ({type: SET_USER_PROFILE, profile});
type SetUserStatusActionType = {
    type: typeof SET_USER_STATUS,
    status: string
}
export const setUserStatus = (status:string):SetUserStatusActionType => ({type: SET_USER_STATUS, status});
type AvatarSaveSuccessActionType = {
    type: typeof SAVE_AVATAR_SUCCESS,
    photos: PhotosType
}
export const avatarSaveSuccess = (photos:PhotosType):AvatarSaveSuccessActionType => ({type: SAVE_AVATAR_SUCCESS, photos})
type SetEditModeActionType = {
    type: typeof SET_EDIT_MODE,
    editMode: boolean
}
export const setEditMode = (editMode:boolean):SetEditModeActionType => ({type: SET_EDIT_MODE, editMode})
//redux-thunk
export const setProfile = (userId:number) => async (dispatch:any) => {
    const data = await profileApi.getProfile(userId)
    dispatch(setUserProfile(data))
}
export const getStatus = (userId:number) => async (dispatch:any) => {
    const data = await profileApi.getUserStatus(userId)
    dispatch(setUserStatus(data))
}
export const updateStatus = (status: string) => async (dispatch:any) => {
    const data = await profileApi.updateUserStatus(status)
    if (data.resultCode === 0) {
        dispatch(setUserStatus(status))
    }
}
export const saveAvatar = (file:any) => async (dispatch:any) => {
    const data = await profileApi.saveAvatar(file)
    if (data.resultCode === 0) {
        dispatch(avatarSaveSuccess(data.data.photos))
    }
}
export const saveProfile = (profile:ProfileType) => async (dispatch:any, getState:any) => {
    const userId = getState().auth.userId
    const data = await profileApi.saveProfile(profile)
    if (data.resultCode === 0) {
        dispatch(setProfile(userId))
        dispatch(setEditMode(false))
    } else{
        let index = data.messages[0].indexOf('>')
        let err = data.messages[0].substring(index + 1, data.messages[0].length - 1).toLowerCase()
        dispatch(stopSubmit('description-form', {'contacts': {[err]: data.messages[0]}}))
    }
}

export default profileReducer