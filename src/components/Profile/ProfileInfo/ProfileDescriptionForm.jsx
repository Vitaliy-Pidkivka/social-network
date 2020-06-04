import React from "react";
import {reduxForm} from "redux-form";
import Button from "../../Shared/Button/Button";
import CustomField, {createField} from "../../Shared/CustomFIeld/CustomField";
import styles from './ProfileInfo.module.scss';

const ProfileDescriptionForm = ({profile, handleSubmit, error}) => {

    return (
        <form onSubmit={handleSubmit} className={styles['profile__description-form']}>
            <Button value={'Save changes'}
                    typeClass={'aqua'}
                    type={'submit'}
            />
            {error && <div>{error}</div>}
            <div>{createField('Full name', 'fullName', 'input',
                CustomField, [], 'input', {}, '')}
            </div>
            <div> {createField('About me', 'aboutMe', 'input',
                CustomField, [], 'input', {}, '')}
            </div>
            <div>
                 {createField('Looking for a job', 'lookingForAJob', 'checkbox',
                  CustomField, [], 'checkbox', {}, 'Looking for a job', `${styles.checkbox}` )}
            </div>
            <div>{createField('My skills', 'lookingForAJobDescription', 'input',
                CustomField, [], 'input', {}, '')}
            </div>
            <div>
                {Object.keys(profile.contacts).map(key => {
                    return <div key={key}>{createField(key, 'contacts.' + key, 'input',
                        CustomField, [], 'input', {}, '')}</div>
                }) }
            </div>
        </form>
    )
}


export default reduxForm({form: 'description-form'})(ProfileDescriptionForm)