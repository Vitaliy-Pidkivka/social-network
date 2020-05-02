import React from 'react'
import styles from './Users.module.scss'
import Button from "../Shared/Button/Button";
import avatarUrl from '../../assets/images/user-avatar.png'
import PaginationButton from "./PaginationButton/PaginationButton";
import Preloader from "../Shared/Preloader/Preloader";
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {usersApi} from "../../api/api";


const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSizes);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
            <div className={styles['users']}>
                {props.isFetching &&  <Preloader className={styles['users__preloader']}/>}
                <div className={styles['users__pagination']}>
                    {pages.map(page => {
                        return <PaginationButton onClick={(e) => {
                            props.onPageChanged(page)
                        }}
                                                 value={page}
                                                 current={props.currentPage}
                                                 page={page}/>
                    })}
                </div>
                {props.users.map(user =>
                    <div className={styles['user']} key={user.id}>
                        <div className={styles['user__box']}>
                            <img src={user.photos.small ? user.photos.small : avatarUrl }
                                 alt="avatar"
                                 className={styles['user__avatar']}/>
                            <Button value={user.followed ? 'Unfollow' : 'Follow'}
                                    onClick={
                                        user.followed
                                            ? () => {
                                                usersApi.unfollow(user.id)
                                                    .then(data => {
                                                        if (data.resultCode === 0) {
                                                            props.unfollow(user.id)
                                                        }
                                                    })
                                            }
                                            : () => {
                                                usersApi.follow(user.id)
                                                    .then(data => {
                                                        if (data.resultCode === 0) {
                                                            props.follow(user.id)
                                                        }
                                                    })

                                            }
                                    }
                                    sizeClass="small"
                                    typeClass="purple"
                                    className={styles['user__btn']}/>
                        </div>
                        <div className={styles['user__box']}>
                         <NavLink to={'/profile/' + user.id}> <h3 className={styles['user__name']}> {user.name}</h3> </NavLink>
                            <p className={styles['user__status']}>{user.status ? user.status : 'status will be here'}</p>
                        </div>
                        <div className={styles['user__box']}>
                            <p className={styles['user__city']}>{"user.location.city"} </p>
                            <p className={styles['user__country']}>{"user.location.country"}</p>
                        </div>
                    </div>)}
                {/*{props.users.length && <Button value="SHOW MORE" typeClass="aqua" className={styles['users__btn']}/>}*/}
            </div>
        )
}


export default Users;