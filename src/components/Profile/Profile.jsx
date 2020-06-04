import React from 'react';
import styles from './Profile.module.scss'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import profileBg from '../../assets/images/bg-profile.jpg'

const Profile = (props) => {
    return (
        <div className={styles['profile']}>
            <div className={styles['profile__img']}>
                <img
                    src={profileBg}
                    alt="#"/>
            </div>
            <ProfileInfo updateStatus={props.updateStatus}
                         status={props.status}
                         profile={props.profile}
                         isOwner={props.isOwner}
                         saveAvatar={props.saveAvatar}
                         saveProfile={props.saveProfile}
                         editMode={props.editMode}
                         setEditMode={props.setEditMode}
            />
            <MyPostsContainer store={props.store} />
        </div>
    );
}

export default Profile;
