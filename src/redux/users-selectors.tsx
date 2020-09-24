import {createSelector} from "reselect";
import {AppStateType} from "./redux-store";

const getUsersSelector = (state: AppStateType) => state.userPage.users;
export const getUsers = createSelector(getUsersSelector, (users) => {
    return users.filter(user => true)
})
export const getPageSizes = (state: AppStateType) => state.userPage.pageSizes;
export const getTotalUsersCount = (state: AppStateType) => state.userPage.totalUsersCount;
export const getPage = (state: AppStateType) => state.userPage.page;
export const getIsFetching = (state: AppStateType) => state.userPage.isFetching;
export const getIsFollowingInProgress = (state: AppStateType) => state.userPage.followingInProgress;
