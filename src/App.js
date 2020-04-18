import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (store) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <main className="content">
                <Sidebar store={store.store}/>
                <div className="main-screen">
                    <Route path="/profile" render={() => <Profile store={store.store}/>}
                    />
                    <Route path="/dialogs" exact
                           render={(props) => <DialogsContainer store={store.store} {...props} />}/>
                    <Route path="/dialogs/:id" exact
                           render={(props) => <DialogsContainer store={store.store} {...props} />}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                </div>
            </main>
        </div>
    )
}

export default App;
