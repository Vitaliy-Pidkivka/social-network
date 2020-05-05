import React from 'react';
import styles from './ProfileInfo.module.scss'
import Preloader from "../../Shared/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (

        <div className={styles['profile__info']}>
            <img src={props.profile.photos.small} alt="#"
                 className={styles.profile__avatar}/>
            <div className="profile__info-box">
                <div className={styles['profile__name']}><p>{props.profile.fullName}</p></div>
                <ProfileStatus aboutMe={props.profile.aboutMe} />
                <div className="profile__site">
                    Web Site:
                    <p>
                        <a href="https://google.com"> {props.profile.contacts.twitter}</a>
                    </p>

                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;
