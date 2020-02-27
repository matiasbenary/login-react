import React,{useState} from 'react'
import Login from './components/Login'

function App() {
    const [auth,setAuth] = useState(false);
    console.log(auth?"Logenado":"sin Logear");
    return (
        <div>
            {auth
            ?"Logeado"
            :<Login setAuth={setAuth}/>}
        </div>
    )
}

export default App
