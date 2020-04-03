import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";

function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <main className="content">
                <Nav/>
                <Profile/>
            </main>
        </div>
    );
}

export default App;
