import React from 'react';
import styles from './ProfileInfo.module.scss'
import Preloader from "../../Shared/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader/>
    }
    return (
        <div className={styles['profile__info']}>
            <img src={profile.photos.small} alt="#"
                 className={styles.profile__avatar}/>
            <div className="profile__info-box">
                <div className={styles['profile__name']}><p>{profile.fullName}</p></div>
                <ProfileStatusWithHooks updateStatus={updateStatus} status={status}/>
                <div className="profile__site">
                    Web Site:
                    <p><a href="https://google.com"> {profile.contacts.twitter}</a></p>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;
