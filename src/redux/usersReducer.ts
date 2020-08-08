import {usersApi} from "../api/api";
import {updateObjectInArray} from "../utils/objectHelpers";
import { ProfileType } from "../types/types";
const FOLLOW = "social-network/users/FOLLOW";
const UNFOLLOW = "social-network/users/UNFOLLOW";
const SET_USERS = "social-network/users/SET-USERS";
const SET_PAGE = "social-network/users/SET-PAGE";
const SET_TOTAL_USERS_COUNT = "social-network/users/SET-TOTAL-USERS-COUNT";
const SET_IS_FETCHING = "social-network/users/SET-IS-FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "social-network/users/TOGGLE-IS-FOLLOWING-PROGRESS";



let initialState = {
    users: [] as Array<ProfileType>,
    pageSizes: 15,
    totalUsersCount: 0,
    page: 1,
    isFetching: true,
    followingInProgress: [] as Array<number>//array of users id,
}
type InitialStateType = typeof initialState

const usersReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: [...action.users]
            }
        }
        case SET_PAGE: {
            return {
                ...state,
                page: action.page,
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.count
            }
        }
        case SET_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress:
                    action.isFetching
                        ? [...state.followingInProgress, action.userId]
                        : [...state.followingInProgress.filter(id => id !== action.userId)]
            }
        }
        default:
            return state
    }
}
type FollowSuccessActionType = {
    type: typeof FOLLOW,
    userId: number
}
export const followSuccess = (userId:number):FollowSuccessActionType => ({type: FOLLOW, userId});
type UnfollowSuccessActionType = {
    type: typeof UNFOLLOW,
    userId: number
}
export const unfollowSuccess = (userId:number):UnfollowSuccessActionType => ({type: UNFOLLOW, userId});
type SetUsersActionType = {
    type: typeof SET_USERS,
    users: Array<ProfileType>
}
export const setUsers = (users: Array<ProfileType>):SetUsersActionType => ({type: SET_USERS, users});
type SetPageActionType = {
    type: typeof  SET_PAGE,
    page: number
}
export const setPage = (page:number):SetPageActionType => ({type: SET_PAGE, page});
type SetTotalUsersCountActionType = {
    type: typeof  SET_TOTAL_USERS_COUNT,
    count: number
}
export const setTotalUsersCount = (totalCount: number):SetTotalUsersCountActionType =>
    ({type: SET_TOTAL_USERS_COUNT, count: totalCount});
type ToggleIsFetchingActionType = {
    type: typeof  SET_IS_FETCHING,
    isFetching: boolean
}
export const toggleIsFetching = (isFetching:boolean):ToggleIsFetchingActionType =>
    ({type: SET_IS_FETCHING, isFetching: isFetching});
type ToggleFollowingProgress ={
    type: typeof  TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching: boolean,
    userId: number
}
export const toggleFollowingProgress = (isFetching:boolean, userId: number):ToggleFollowingProgress => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching: isFetching,
    userId
});
// redux-thunk
export const requestUsers = (currentPage:number, pageSizes: number) => {
    return async (dispatch:any) => {
        dispatch(toggleIsFetching(true))
        let data = await usersApi.getUsers(currentPage, pageSizes)
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
    }
}
const followUnfollowFlow = async (dispatch:any, userId:number, apiMethod: any, actionCreator: any) => {
    dispatch(toggleFollowingProgress(true, userId))
    let data = await apiMethod(userId)
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))
}
export const unfollowThunk = (userId:number) => async (dispatch:any) => {
    followUnfollowFlow(dispatch, userId, usersApi.unfollow.bind(usersApi), unfollowSuccess)
}
export const followThunk = (userId:number) => async (dispatch:any) => {
    followUnfollowFlow(dispatch, userId, usersApi.follow.bind(usersApi), followSuccess)
}

export default usersReducer;