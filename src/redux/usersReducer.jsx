import {usersApi} from "../api/api";
import {updateObjectInArray} from "../utils/objectHelpers";

const FOLLOW = "social-network/users/FOLLOW";
const UNFOLLOW = "social-network/users/UNFOLLOW";
const SET_USERS = "social-network/users/SET-USERS";
const SET_PAGE = "social-network/users/SET-PAGE";
const SET_TOTAL_USERS_COUNT = "social-network/users/SET-TOTAL-USERS-COUNT";
const SET_IS_FETCHING = "social-network/users/SET-IS-FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "social-network/users/TOGGLE-IS-FOLLOWING-PROGRESS";


let initialState = {
    users: [],
    pageSizes: 15,
    totalUsersCount: 0,
    page: 1,
    isFetching: true,
    followingInProgress: [],
}

const usersReducer = (state = initialState, action) => {
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

export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setPage = (page) => ({type: SET_PAGE, page});
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalCount});
export const toggleIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching: isFetching});
export const toggleFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching: isFetching,
    userId
});
// redux-thunk
export const requestUsers = (currentPage, pageSizes) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        usersApi.getUsers(currentPage, pageSizes)
            .then(data => {
                dispatch(toggleIsFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalUsersCount(data.totalCount))
            })
    }
}
const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgress(true, userId))
    let data = await apiMethod(userId)
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))
}
export const unfollowThunk = (userId) => async dispatch => {
    followUnfollowFlow(dispatch, userId, usersApi.unfollow.bind(usersApi), unfollowSuccess)
}
export const followThunk = (userId) => async dispatch => {
    followUnfollowFlow(dispatch, userId, usersApi.follow.bind(usersApi), followSuccess)
}

export default usersReducer;