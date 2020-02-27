import React,{useState} from 'react';
import Login from './components/Login';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Home from './components/Home';

function App() {
    const [auth,setAuth] = useState(false);
    return (
        <Router>
            <Switch>
                <Route exact path="/" >
                    <Home auth={auth}/>
                </Route>
                <Route path="/login">
                    <Login setAuth={setAuth} auth={auth}/>
                </Route>
            </Switch>
        </Router>
    )
}

export default App
