import Users from "./Users";
import {connect} from "react-redux";
import {followAC, setCurrentPage, setTotalUsersCount, setUsersAC, unfollowAC} from "../../redux/usersReducer";

let mapStateToProps = (state) => {
    return {
        users: state.userPage.users,
        pageSizes: state.userPage.pageSizes,
        totalUsersCount: state.userPage.totalUsersCount,
        currentPage :state.userPage.currentPage,
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);