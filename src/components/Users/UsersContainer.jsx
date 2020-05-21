import Users from "./Users";
import {connect} from "react-redux";
import {
    followThunk, getUsers,
    setCurrentPage, setTotalUsersCount,
    toggleIsFetching, unfollowThunk
} from "../../redux/usersReducer";
import React from "react";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

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
        users: state.userPage.users,
        pageSizes: state.userPage.pageSizes,
        totalUsersCount: state.userPage.totalUsersCount,
        currentPage: state.userPage.currentPage,
        isFetching: state.userPage.isFetching,
        followingInProgress: state.userPage.followingInProgress
    }
}

export default compose(
    connect(mapStateToProps, {
        setCurrentPage, setTotalUsersCount, toggleIsFetching, getUsers, followThunk, unfollowThunk,
    }))
(UsersContainer)