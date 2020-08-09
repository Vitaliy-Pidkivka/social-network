import Users from "./Users";
import {connect} from "react-redux";
import {
    followThunk, requestUsers, setPage, unfollowThunk
} from "../../redux/usersReducer";
import React from "react";
import {compose} from "redux";
import {
    getIsFetching, getIsFollowingInProgress, getPage, getPageSizes, getTotalUsersCount,
    getUsers
} from "../../redux/users-selectors";
import {UserType} from "../../types/types";
import { AppStateType } from "../../redux/redux-store";

type MapStatePropsType = {
    users: Array<UserType>,
    pageSizes: number,
    totalUsersCount: number,
    page: number,
    isFetching: boolean,
    followingInProgress: Array<number>,
}

type MapDispatchPropsType = {
    getUsers: (currentPage: number, pageSizes: number) => void
    setPage: (page:number) => void
    followThunk: (userId: number) => void
    unfollowThunk: (userId: number) => void
}
type OwnPropsType = {
    title: string
}
type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class UsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        const {page, pageSizes} = this.props
        this.props.getUsers(page, pageSizes)
    }

    onPageChanged = (page: number) => {
        const {pageSizes} = this.props
        this.props.setPage(page);
        this.props.getUsers(page, pageSizes)
    }

    render() {
        return (
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSizes={this.props.pageSizes}
                   currentPage={this.props.page}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   isFetching={this.props.isFetching}
                   followingInProgress={this.props.followingInProgress}
                   followThunk={this.props.followThunk}
                   unfollowThunk={this.props.unfollowThunk}
            />
        )
    }
}

let mapStateToProps = (state:AppStateType): MapStatePropsType => {
    return {
        users: getUsers(state),
        pageSizes: getPageSizes(state),
        totalUsersCount: getTotalUsersCount(state),
        page: getPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getIsFollowingInProgress(state),
    }
}

export default compose(
// <TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultRootState>
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
        getUsers: requestUsers, followThunk, unfollowThunk, setPage
    }))
(UsersContainer)