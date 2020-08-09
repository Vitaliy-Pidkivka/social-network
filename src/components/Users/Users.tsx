import React, {FC} from 'react'
import styles from './Users.module.scss'
import Preloader from "../Shared/Preloader/Preloader";
import {Paginator} from "../Shared/Paginator/Paginator";
import User from "./User/User";
import {UserType} from "../../types/types";


type PropsType = {
    totalUsersCount: number
    pageSizes: number
    currentPage: number
    users: Array<UserType>
    isFetching: boolean
    followingInProgress: Array<number>

    onPageChanged: (page: number) => void
    followThunk: (userId: number) => void
    unfollowThunk: (userId: number) => void
}
const Users: FC<PropsType> = ({totalUsersCount,
                                  pageSizes, onPageChanged,
                                  currentPage, users,
                                  isFetching, ...props}) => {

    return (
        <div className={styles['users']}>
            {isFetching && <Preloader big={false} className={styles['users__preloader']}/>}
            <Paginator
                totalItemsCount={totalUsersCount}
                pageSizes={pageSizes}
                onPageChanged={onPageChanged}
                currentPage={currentPage}
            />
            {users.map(user => <User
                user={user}
                key={user.id}
                followingInProgress={props.followingInProgress}
                followThunk={props.followThunk}
                unfollowThunk={props.unfollowThunk}
            />)}
        </div>
    )
}


export default Users;