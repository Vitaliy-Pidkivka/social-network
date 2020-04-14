import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import  state from './redux/state';
const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <main className="content">
                    <Sidebar/>
                    <div className="main-screen">
                        <Route path="/profile" render={() => <Profile profile={state.profile}/>}/>
                        {/*<Route path="/dialogs" exact render = { (props) => <Dialogs {...props} />}/>*/}
                        <Route path="/dialogs" exact render={(props) => <Dialogs  dialogs={state.dialogs} {...props}/>}/>
                        <Route path="/dialogs/:id" exact render={(props) => <Dialogs  dialogs={state.dialogs} {...props}/>}/>
                        <Route path="/news" component={News}/>
                        <Route path="/music" component={Music}/>
                        <Route path="/settings" component={Settings}/>
                    </div>
                </main>
            </div>
        </BrowserRouter>
    )
}

export default App;
