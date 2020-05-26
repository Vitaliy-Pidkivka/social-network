import Users from "./Users";
import {connect} from "react-redux";
import {
    followThunk, requestUsers,
    setPage, setTotalUsersCount,
    toggleIsFetching, unfollowThunk
} from "../../redux/usersReducer";
import React from "react";
import {compose} from "redux";
import {
    getIsFetching,
    getIsFollowingInProgress,
    getPage,
    getPageSizes,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selectors";

class UsersContainer extends React.Component {
    componentDidMount() {
        const {page,pageSizes} = this.props
        this.props.getUsers(page, pageSizes)
    }

    onPageChanged = (page) => {
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

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSizes: getPageSizes(state),
        totalUsersCount: getTotalUsersCount(state),
        page:getPage(state) ,
        isFetching:getIsFetching(state) ,
        followingInProgress: getIsFollowingInProgress(state),
    }
}

export default compose(
    connect(mapStateToProps, {
        setPage, setTotalUsersCount, toggleIsFetching, getUsers: requestUsers, followThunk, unfollowThunk,
    }))
(UsersContainer)