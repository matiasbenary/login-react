import React,{useContext} from 'react'
import { Redirect } from 'react-router-dom';
import {Context} from '../../context/AuthContext';

const Home = () => {
    const { auth,setAuth } = useContext(Context);
    if(!auth){
        return <Redirect to="/login"/>
     }
    const logout = () =>{
        setAuth(null);
        localStorage.removeItem("auth");
    }

    return (
        <div>
            Esto es Home {auth.username}
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default Home;
