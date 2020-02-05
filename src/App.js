import React from 'react';
import logo from './assets/mitrai-logo.png';
import './App.css';
import Registration from "./Components/auth/Registration";

function App() {
    return (
        <div>
            <header>
                <div style={{margin: "20px auto 20px auto", width: "50%"}}>
                    <img src={logo} alt="logo"/>
                </div>
                <Registration/>
            </header>
        </div>
    );
}

export default App;
