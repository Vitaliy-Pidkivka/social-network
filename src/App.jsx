import React from 'react';
import './App.scss';
import Sidebar from "./components/Sidebar/Sidebar";
import {Route, withRouter} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {compose} from "redux";
import {connect} from "react-redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/Shared/Preloader/Preloader";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader big={true} />
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <main className="content">
                    <Sidebar store={this.props.store}/>
                    <div className="main-screen">
                        <Route path="/profile/:userId?" exact
                               render={() => <ProfileContainer store={this.props.store}/>}
                        />
                        <Route path="/dialogs/:id?"
                               render={(props) => <DialogsContainer store={this.props.store} {...props} />}/>
                        <Route path="/news" component={News}/>
                        <Route path="/music" component={Music}/>
                        <Route path="/users" render={() => <UsersContainer/>}/>
                        <Route path="/settings" component={Settings}/>
                        <Route path="/login" exact component={Login}/>
                    </div>
                </main>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})
export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);
