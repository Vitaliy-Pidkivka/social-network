import React from 'react';
import Profile from "./Profile";
import {getStatus, setProfile, updateStatus} from "../../redux/profileReducer";
import { withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";

class ProfileContainer extends  React.Component{

    componentDidMount() {
        let userId= this.props.match.params.userId
        if(!userId){
            userId = this.props.authorizedUserId;
            if(!userId){
                this.props.history.push("/login");
            }
        }
        this.props.setProfile(userId)
        this.props.getStatus(userId)
    }

    render(){
        return  <Profile updateStatus={this.props.updateStatus}
                         status={this.props.status}
                         profile={this.props.profile}/>
    }
}

let mapStateToProps = (state)=>({
    profile: state.profile.profile,
    status: state.profile.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})

export default compose(
    connect(mapStateToProps, {setProfile, updateStatus, getStatus}),
    withRouter,
    // withAuthRedirect,
)(ProfileContainer);
