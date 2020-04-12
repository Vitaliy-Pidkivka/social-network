import React from 'react';
import styles from './Profile.module.scss'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    return (
        <div className={styles['profile']}>
            <div className={styles['profile__img']}>
                <img
                    src="https://image.winudf.com/v2/image/Y29tLmhkd2Nhci5teWhhaWJpemhpX3NjcmVlbnNob3RzXzJfYjU4MjhlMQ/screen-2.jpg?fakeurl=1&type=.jpg"
                    alt="#" />
            </div>
            <ProfileInfo/>
            <MyPosts posts={props.profile.posts}/>
        </div>
    );
}

export default Profile;
