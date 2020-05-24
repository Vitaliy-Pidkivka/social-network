import React, {useEffect, useState} from 'react';
import styles from './ProfileInfo.module.scss'


const ProfileStatusWithHooks = (props) => {

    let {editMode, setEditMode} = useState(false)
    let {status, setStatus} = useState(props.status)

    useEffect( () => {
        setStatus(props.status)
    },[setStatus, props.status])
    const activateEditMode = () => {
        setEditMode(true)
    }
    const disableActiveMode = () => {
        setEditMode(false)
        props.updateStatus(this.state.status)
    }
    const onChangeInputValue = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div className={styles.profile__status}>
            {!editMode && <p onDoubleClick={activateEditMode}>{status || '---'}</p>}
            {editMode && <input onBlur={disableActiveMode} type="text"
                                           className={styles['profile__status-input']}
                                           autoFocus={true}
                                           onChange={onChangeInputValue}
                                           value={status}
            />}
        </div>
    )
}

export default ProfileStatusWithHooks;
