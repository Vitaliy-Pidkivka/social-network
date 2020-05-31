import React from 'react';
import styles from './ProfileInfo.module.scss'
import Preloader from "../../Shared/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import userPhoto from "../../../assets/images/user-avatar.png"
import CustomUploadInput from "../../Shared/CustomUploadInput/CustomUploadInput";

const ProfileInfo = ({profile, status, updateStatus,isOwner,saveAvatar}) => {
    if (!profile) {
        return <Preloader/>
    }
    const onUploadFile = (e) =>{
        if(e.target.files.length){
            saveAvatar(e.target.files[0])
        }
    }
    return (
        <div className={styles['profile__info']}>
            <div className={styles['profile__avatar-wrapper']}>
                <img src={profile.photos.large || userPhoto} alt="#"
                     className={styles.profile__avatar}/>

                {isOwner && <CustomUploadInput
                    id={'avatar'}
                    name={'avatar'}
                    onChange={onUploadFile}
                    className={styles.avatarUpload}
                >
                    Change avatar
                </CustomUploadInput>}
            </div>
            <div className="profile__info-box">
                <div className={styles['profile__name']}><p>{profile.fullName}</p></div>
                <ProfileStatus updateStatus={updateStatus} status={status}/>
                <div className="profile__site">
                    Web Site:
                    <p><a href="https://google.com"> {profile.contacts.twitter}</a></p>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;
