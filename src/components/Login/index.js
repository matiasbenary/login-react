import React, { useState,useContext } from "react";
import { Redirect } from 'react-router-dom';
import "./login.scss";
import {Context} from '../../context/AuthContext';

const Login = () => {
  const [dataLogin, setDataLogin] = useState({});
  const { auth,setAuth } = useContext(Context)
    if(auth===true){
       return <Redirect to="/"/>
    }

  const saveDataLogin = e => {
    const { name, value } = e.target;
    setDataLogin({
      ...dataLogin,
      [name]: value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    const isAuth = (dataLogin.username==="matias"
        && dataLogin.password ==="123");
    
        setAuth(isAuth);

  };
  return (
    <div className="body">
      <form className="login" onSubmit={onSubmit}>
        <h2 className="login__title">Login</h2>

        <div className="login__inputs">
          <label htmlFor="username" className="login__label">
            Usuario
            <input
              type="text"
              name="username"
              className="login__input"
              onChange={saveDataLogin}
            />
          </label>
        </div>
        <div className="login__inputs">
          <label htmlFor="password" className="login__label">
            Password
            <input
              type="password"
              name="password"
              className="login__input"
              onChange={saveDataLogin}
            />
          </label>
        </div>
        <div className="login__buttons">
          <button className="login__buttons__login" type="submit">
            iniciar sesion
          </button>
          <button className="login__buttons__lost"> olvide mi clave</button>
        </div>
      </form>
    </div>
  );
};
export default Login;
