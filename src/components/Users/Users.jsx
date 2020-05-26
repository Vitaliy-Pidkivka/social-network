import React from 'react'
import styles from './Users.module.scss'
import Preloader from "../Shared/Preloader/Preloader";
import Paginator from "../Shared/Paginator/Paginator";
import User from "./User/User";


const Users = ({totalUsersCount, pageSizes, onPageChanged, currentPage, users,isFetching, ...props}) => {

    return (
        <div className={styles['users']}>
            {isFetching && <Preloader className={styles['users__preloader']}/>}
            <Paginator totalUsersCount={totalUsersCount}
                       pageSizes={pageSizes}
                       onPageChanged={onPageChanged}
                       currentPage={currentPage}
            />
            {users.map(user => <User user={user}
                                     followingInProgress={props.followingInProgress}
                                     followThunk={props.followThunk}
                                     unfollowThunk={props.unfollowThunk}
            />)}
        </div>
    )
}


export default Users;