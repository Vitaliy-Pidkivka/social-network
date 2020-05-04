import React from 'react';
import Profile from "./Profile";
import {setProfile} from "../../redux/profileReducer";
import {Redirect, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class ProfileContainer extends  React.Component{

    componentDidMount() {
        let userId= this.props.match.params.userId
        if(!userId){
            userId = 2;
        }
        this.props.setProfile(userId)
    }

    render(){
        return  <Profile {...this.props} profile={this.props.profile}/>
    }
}

let mapStateToProps = (state)=>({
    profile: state.profile.profile,
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

let AuthRedirectComponent = withAuthRedirect(WithUrlDataContainerComponent)

export default connect(mapStateToProps, {
    setProfile
})(AuthRedirectComponent);
