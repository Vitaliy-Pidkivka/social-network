import React from 'react';
import styles from './ProfileInfo.module.scss'


const ProfileInfo = (props) => {
    return (
        <div className={styles['profile__info']}>
            <img src="https://cdn2.iconfinder.com/data/icons/men-avatars/33/man_2-512.png" alt="#"
                 className={styles.profile__avatar}/>
            <div className="profile__info-box">
                <div className={styles['profile__name']}><p>Vitalii Pidkivka</p></div>
                <div className="profile__date"><p>Date of Birth: <span>6 september</span></p></div>
                <div className="profile__education"><p>Education: <span>BSU 11</span></p></div>
                <div className="profile__site"><p>Web Site: <a href="https://google.com">google.com</a></p></div>
            </div>
        </div>
    );
}

export default ProfileInfo;
