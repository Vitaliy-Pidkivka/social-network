import React, {Suspense} from 'react';
import './App.scss';
import Sidebar from "./components/Sidebar/Sidebar";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import HeaderContainer from "./components/Header/HeaderContainer";
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/Shared/Preloader/Preloader";
import store from "./redux/redux-store";
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"));
const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const Login = React.lazy(() => import("./components/Login/Login"));

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader big={true}/>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <main className="content">
                    <Sidebar store={this.props.store}/>
                    <div className="main-screen">
                        {<Suspense fallback={<Preloader/>}>
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
                        </Suspense>}
                    </div>
                </main>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})


let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

let SocialNetworkApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

export default SocialNetworkApp
