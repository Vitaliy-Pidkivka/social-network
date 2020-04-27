import Users from "./Users";
import {connect} from "react-redux";
import {
    followAC,
    setCurrentPage,
    setTotalUsersCount,
    setUsersAC,
    toggleIsFetching,
    unfollowAC
} from "../../redux/usersReducer";
import React from "react";
import * as axios from "axios";
import styles from "./Users.module.scss";
import PaginationButton from "./PaginationButton/PaginationButton";
import avatarUrl from "../../assets/images/user-avatar.png";
import Button from "../Shared/Button/Button";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSizes}`)

            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        this.props.toggleIsFetching(true)
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSizes}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
            })
    }

    render(){
       return(
           <Users  totalUsersCount={this.props.totalUsersCount}
                   pageSizes={this.props.pageSizes}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   isFetching={this.props.isFetching}
           />
       )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.userPage.users,
        pageSizes: state.userPage.pageSizes,
        totalUsersCount: state.userPage.totalUsersCount,
        currentPage :state.userPage.currentPage,
        isFetching: state.userPage.isFetching,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) =>{
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (page) =>{
            dispatch(setCurrentPage(page))
        },
        setTotalUsersCount: (count) =>{
            dispatch(setTotalUsersCount(count))
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetching(isFetching))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);