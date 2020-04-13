import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";

const App = ({state}) => {
    console.log(state)
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <main className="content">
                    <Nav/>
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
