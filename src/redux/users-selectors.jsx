import {createSelector} from "reselect";

const getUsersSelector = (state) => state.userPage.users;
export const getUsers = createSelector(getUsersSelector, (users) =>{
    return users.filter(user => true)
})
export const getPageSizes = (state) => state.userPage.pageSizes;
export const getTotalUsersCount = (state) => state.userPage.totalUsersCount;
export const getPage = (state) => state.userPage.page;
export const getIsFetching = (state) => state.userPage.isFetching;
export const getIsFollowingInProgress = (state) => state.userPage.followingInProgress;
