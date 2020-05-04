import React from 'react';
import styles from './ProfileInfo.module.scss'
import userAvatar from '../../../assets/images/user-avatar.png'
import Preloader from "../../Shared/Preloader/Preloader";


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
                <div className="profile__date"><p>Date of Birth: <span>6 september</span></p></div>
                <div className="profile__education"><p>Education: <span>BSU 11</span></p></div>
                <div className="profile__site">
                    Web Site:
                    <p>
                        <a href="https://google.com"> {props.profile.contacts.twitter}</a>
                    </p>

                </div>
                <div className="profile__site">
                    Web Site 2:
                    <p>
                        <a href="https://google.com"> {props.profile.contacts.instagram}</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;
