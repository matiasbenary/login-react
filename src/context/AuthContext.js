import React,{useState} from 'react';

export const Context = React.createContext();

const getUserStorage = () =>{
    const storage = localStorage.getItem('auth');
    const jsonParse = JSON.parse(storage);
    return jsonParse;
}

const AuthContext = ({children}) => {
    
    const [auth,setAuth] = useState(getUserStorage());
    return (
        <Context.Provider value={{auth,setAuth}}>
            {children}
        </Context.Provider>
    );
}

export default AuthContext;
