import React from 'react';
import styles from './ProfileInfo.module.scss'
import Preloader from "../../Shared/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import userPhoto from "../../../assets/images/user-avatar.png"
import CustomUploadInput from "../../Shared/CustomUploadInput/CustomUploadInput";
import ProfileDescription from "./ProfileDescription";
import ProfileDescriptionForm from "./ProfileDescriptionForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, saveAvatar, saveProfile, editMode, setEditMode}) => {
    if (!profile) {
        return <Preloader/>
    }

    const onUploadFile = (e) => {
        if (e.target.files.length) {
            saveAvatar(e.target.files[0])
        }
    }
    const goToEditMode = () => {
         setEditMode(true)
    }
    const onSubmitForm = (profileInfoData) => {
         saveProfile(profileInfoData)
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
                {editMode ? <ProfileDescriptionForm initialValues={profile}
                                                    profile={profile}
                                                    onSubmit={onSubmitForm}
                    />
                    : <ProfileDescription profile={profile}
                                          isOwner={isOwner}
                                          goToEditMode={goToEditMode}
                    />}
            </div>
        </div>
    );
}


export default ProfileInfo;
