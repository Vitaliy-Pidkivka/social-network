import React from 'react';
import styles from './ProfileInfo.module.scss'


class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status

    }
    activateEditMode = ()=>{
        this.setState({
            editMode:true,
        })
        this.props.updateStatus(this.state.status)
    }
    disableActiveMode = ()=>{
        this.setState({
            editMode:false,
        })
    }
    onChangeInputValue = (e)=>{
        this.setState({
            status: e.currentTarget.value
        })
    }
    render() {
        return (
            <div className={styles.profile__status}>
                {!this.state.editMode && <p onDoubleClick={this.activateEditMode}>{this.props.status || '---'}</p>}
                {this.state.editMode && <input onBlur={this.disableActiveMode} type="text"
                                               className={styles['profile__status-input']}
                                               autoFocus={true}
                                               onChange={this.onChangeInputValue}
                                               value={this.state.status}
                />}
            </div>
        )
    }
}

export default ProfileStatus;
