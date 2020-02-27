import React,{useState} from 'react';

export const Context = React.createContext();

const AuthContext = ({children}) => {
    const [auth,setAuth] = useState(false);
    return (
        <Context.Provider value={{auth,setAuth}}>
            {children}
        </Context.Provider>
    );
}

export default AuthContext;
