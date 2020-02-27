import React,{useContext} from 'react'
import { Redirect } from 'react-router-dom';
import {Context} from '../../context/AuthContext';



const Home = () => {
    const { auth } = useContext(Context);
    if(auth===false){
        return <Redirect to="/login"/>
     }

    return (
        <div>
            Esto es Home
        </div>
    )
}

export default Home;
