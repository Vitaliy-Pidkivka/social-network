import React from "react";
import styles from "./ProfileInfo.module.scss";
import Button from "../../Shared/Button/Button";

const ProfileDescription = ({profile, isOwner, goToEditMode}) => {
    return (
        <div className="profile__description">
            {isOwner && <Button
                value="Edit profile"
                onClick={goToEditMode}
                typeClass="aqua"
            />}
            <div><b>About me: </b> {profile.aboutMe}</div>
            <div><b>Looking for a job: </b> {profile.lookingForAJob ? 'Yes' : 'No'}</div>
            <div><b>My skills: </b> {profile.lookingForAJob && profile.lookingForAJobDescription}</div>
            <div><b>Contacts: </b>
                {Object.keys(profile.contacts).map(key => {
                    return <Contact
                        key={key}
                        title={key}
                        value={profile.contacts[key]}
                    />
                })}
            </div>
        </div>
    )
}

const Contact = ({title, value}) => {
    return <div className={styles.contact}><b>{title}: </b> <a href={value}
                                                               rel="noopener noreferrer"
                                                               target="_blank">{value}</a></div>
}

export default ProfileDescription