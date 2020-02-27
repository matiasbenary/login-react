import React from 'react'
import { Redirect } from 'react-router-dom';

const Home = ({auth}) => {
    
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
