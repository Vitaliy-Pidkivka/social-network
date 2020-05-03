import Users from "./Users";
import {connect} from "react-redux";
import {
    followSuccess, followThunk, getUsers,
    setCurrentPage,  setTotalUsersCount,
    setUsers, toggleFollowingProgress,
    toggleIsFetching, unfollowSuccess, unfollowThunk
} from "../../redux/usersReducer";
import React from "react";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSizes)

    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        this.props.getUsers(page, this.props.pageSizes)
    }

    render() {
        return (
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSizes={this.props.pageSizes}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   followSuccess={this.props.followSuccess}
                   unfollowSuccess={this.props.unfollowSuccess}
                   isFetching={this.props.isFetching}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
                   followingInProgress={this.props.followingInProgress}
                   followThunk={this.props.followThunk}
                   unfollowThunk={this.props.unfollowThunk}
            />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.userPage.users,
        pageSizes: state.userPage.pageSizes,
        totalUsersCount: state.userPage.totalUsersCount,
        currentPage: state.userPage.currentPage,
        isFetching: state.userPage.isFetching,
        followingInProgress: state.userPage.followingInProgress
    }
}

export default connect(mapStateToProps, {
    setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingProgress,
    getUsers, followThunk, unfollowThunk, unfollowSuccess, followSuccess
})(UsersContainer);