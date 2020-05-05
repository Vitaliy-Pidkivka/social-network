import React from 'react';
import styles from './ProfileInfo.module.scss'


class ProfileStatus extends React.Component {

    state = {
        editMode: false
    }
    activateEditMode = ()=>{
        this.setState({
            editMode:true,
        })
    }
    disableActiveMode = ()=>{
        this.setState({
            editMode:false,
        })
    }
    render() {
        return (
            <div className={styles.profile__status}>
                {!this.state.editMode && <p onDoubleClick={this.activateEditMode}>{this.props.aboutMe}</p>}
                {this.state.editMode && <input onBlur={this.disableActiveMode} type="text"
                                               className={styles['profile__status-input']}
                                               autoFocus={true}
                />}
            </div>
        )
    }
}

export default ProfileStatus;
