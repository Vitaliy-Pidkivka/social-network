import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";

const App = (store) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <main className="content">
                <Sidebar sidebar={store.state.sidebar}/>
                <div className="main-screen">
                    <Route path="/profile" render={() => <Profile profile={store.state.profile}
                                                                  dispatch={store.dispatch} />}
                    />
                    <Route path="/dialogs" exact
                           render={(props) => <Dialogs dialogs={store.state.dialogs} {...props} dispatch={store.dispatch.bind(store)}/>}/>
                    <Route path="/dialogs/:id" exact
                           render={(props) => <Dialogs dialogs={store.state.dialogs} {...props} dispatch={store.dispatch.bind(store)}/>}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                </div>
            </main>
        </div>
    )
}

export default App;
