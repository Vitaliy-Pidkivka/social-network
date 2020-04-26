import React from 'react'
import styles from './Users.module.scss'
import Button from "../Shared/Button/Button";
import * as axios from 'axios'
import avatarUrl from '../../assets/images/user-avatar.png'


class Users extends React.Component {

    constructor(props) {
        super(props);
    }
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        })
    }


    render(){
        return (
            <div className={styles['users']}>
                {!this.props.users.length && <Button onClick={this.getUsers} value="GET USERS" typeClass="aqua" className={styles['users__btn']}/>}
                {this.props.users.map(user =>
                    <div className={styles['user']}>
                        <div className={styles['user__box']}>
                            <img src={user.photos.small ? user.photos.small : avatarUrl }
                                 alt="avatar"
                                 className={styles['user__avatar']}/>
                            <Button value={user.followed ? 'Unfollow' : 'Follow'}
                                    onClick={user.followed ? () => {this.props.unfollow(user.id) } : () => { this.props.follow(user.id) }}
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
                {this.props.users.length && <Button value="SHOW MORE" typeClass="aqua" className={styles['users__btn']}/>}
            </div>
        )
    }
}


export default Users;