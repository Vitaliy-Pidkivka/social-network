import React from 'react'
import styles from './Users.module.scss'
import Button from "../Shared/Button/Button";
import * as axios from 'axios'
import avatarUrl from '../../assets/images/user-avatar.png'
import PaginationButton from "./PaginationButton/PaginationButton";


class Users extends React.Component {

    componentDidMount() {
        axios
            .get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSizes}`)
            .then(response => {
                console.log(response)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSizes}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render(){
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSizes);
        const pages = [];
        for(let i = 1; i <= pagesCount; i++){
            pages.push(i);
        }


        return (
            <div className={styles['users']}>
                <div className={styles['users__pagination']}>
                    {pages.map(page => {
                        return <PaginationButton onClick={(e) => {
                            this.onPageChanged(page)
                        }}
                                                 value={page}
                                                 current={this.props.currentPage}
                                                 page={page}/>
                    })}
                </div>
                {this.props.users.map(user =>
                    <div className={styles['user']} key={user.id}>
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