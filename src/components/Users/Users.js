import React from 'react'
import styles from './Users.module.scss'
import Button from "../Shared/Button/Button";
import * as axios from 'axios'
import avatarUrl from '../../assets/images/user-avatar.png'
const Users = (props) => {

    if (!props.users.length) {

        // props.setUsers([
        //     {
        //         id: 1,
        //         followed: true,
        //         avatarUrl: 'https://cdn2.iconfinder.com/data/icons/men-avatars/33/man_2-512.png',
        //         fullName: 'Dmutro',
        //         status: 'playing valorant...',
        //         location: {city: 'Lviv', country: 'Ukraine'},
        //     },
        //     {
        //         id: 2,
        //         followed: true,
        //         avatarUrl: 'https://cdn2.iconfinder.com/data/icons/men-avatars/33/man_7-512.png',
        //         fullName: 'Vasia',
        //         status: 'react vorever',
        //         location: {city: 'Minsk', country: 'Belarus'},
        //     },
        //     {
        //         id: 3,
        //         followed: true,
        //         avatarUrl: 'https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/84-512.png',
        //         fullName: 'Tania',
        //         status: 'cycling the best',
        //         location: {city: 'Lviv', country: 'Ukraine'},
        //     },
        //     {
        //         id: 4,
        //         followed: false,
        //         avatarUrl: 'https://cdn4.iconfinder.com/data/icons/men-avatars-icons-set-1/256/21-512.png',
        //         fullName: 'Krzysztof',
        //         status: 'playing valorant...',
        //         location: {city: 'Krakov', country: 'Poland'},
        //     },
        // ])
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            console.log(response)
            props.setUsers(response.data.items)
        })

    }
    return (
        <div className={styles['users']}>
            {props.users.map(user =>
                <div className={styles['user']}>
                    <div className={styles['user__box']}>
                        <img src={user.photos.small ? user.photos.small : avatarUrl }
                             alt="avatar"
                             className={styles['user__avatar']}/>
                        <Button value={user.followed ? 'Unfollow' : 'Follow'}
                                onClick={user.followed ? () => {props.unfollow(user.id) } : () => {  props.follow(user.id) }}
                                sizeClass="small"
                                typeClass="purple"
                                className={styles['user__btn']}/>
                    </div>
                    <div className={styles['user__box']}>
                        <h3 className={styles['user__name']}> {user.name}</h3>
                        <p className={styles['user__status']}>{user.status ? user.status : 'status will be here'}</p>
                    </div>
                    <div className={styles['user__box']}>
                        <p className={styles['user__city']}>{"user.location.city"} </p>
                        <p className={styles['user__country']}>{"user.location.country"}</p>
                    </div>
                </div>)}
            {props.users.length && <Button value="SHOW MORE" typeClass="aqua" className={styles['users__btn']}/>}
        </div>
    )

}


export default Users;