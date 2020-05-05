import React from 'react';
import Profile from "./Profile";
import {setProfile} from "../../redux/profileReducer";
import { withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

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

export default compose(
    connect(mapStateToProps, {setProfile}),
    withRouter,
    withAuthRedirect,
)(ProfileContainer);
