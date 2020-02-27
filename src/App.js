import React,{useState} from 'react';
import Login from './components/Login';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Home from './components/Home';
import AuthContext from './context/AuthContext';

function App() {
    return (
        <AuthContext>
            <Router>
                <Switch>
                    <Route exact path="/" >
                        <Home/>
                    </Route>
                    <Route path="/login">
                        <Login/>
                    </Route>
                </Switch>
            </Router>
        </AuthContext>
    )
}

export default App
