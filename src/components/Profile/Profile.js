import React from 'react';
import styles from './Profile.module.scss'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div className={styles['profile']}>
            <div className={styles['profile__img']}>
                <img
                    src="https://image.winudf.com/v2/image/Y29tLmhkd2Nhci5teWhhaWJpemhpX3NjcmVlbnNob3RzXzJfYjU4MjhlMQ/screen-2.jpg?fakeurl=1&type=.jpg"
                    alt="#"/>
            </div>
            <ProfileInfo updateStatus={props.updateStatus} status={props.status} profile={props.profile}/>
            <MyPostsContainer store={props.store} />
        </div>
    );
}

export default Profile;
