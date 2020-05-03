import React from 'react';
import './App.scss';
import Sidebar from "./components/Sidebar/Sidebar";
import {Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/login";

const App = (store) => {
    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <main className="content">
                <Sidebar store={store.store}/>
                <div className="main-screen">
                    <Route path="/profile/:userId?" exact render={() => <ProfileContainer store={store.store}/>}
                    />
                    <Route path="/dialogs/:id?"
                           render={(props) => <DialogsContainer store={store.store} {...props} />}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/users" render={()=> <UsersContainer />}/>
                    <Route path="/settings" component={Settings}/>
                    <Route path="/login" exact component={Login}/>
                </div>
            </main>
        </div>
    )

}

export default App;
