import React from 'react'
import styles from './User.module.scss'
import Button from "../../Shared/Button/Button";
import avatarUrl from '../../../assets/images/user-avatar.png'
import {NavLink} from "react-router-dom";


const User = ({followingInProgress, unfollowThunk, followThunk, user}) => {

    return (
        <div className={styles['user']}>
            <div className={styles['user__box']}>
                <img src={user.photos.small || avatarUrl}
                     alt="avatar"
                     className={styles['user__avatar']}
                />
                {!followingInProgress.some(id => id === user.id) &&
                <Button value={user.followed ? 'Unfollow' : 'Follow'}
                        onClick={
                            user.followed
                                ? () => {
                                    unfollowThunk(user.id)
                                }
                                : () => {
                                    followThunk(user.id)
                                }
                        }
                        sizeClass="small"
                        typeClass="purple"
                        className={styles['user__btn']}
                />}
            </div>
            <div className={styles['user__box']}>
                <NavLink to={'/profile/' + user.id}><h3 className={styles['user__name']}> {user.name}</h3></NavLink>
                <p className={styles['user__status']}>{user.status || 'status will be here'}</p>
            </div>
            <div className={styles['user__box']}>
                <p className={styles['user__city']}>{"user.location.city"} </p>
                <p className={styles['user__country']}>{"user.location.country"}</p>
            </div>
        </div>
    )
}
export default User
