import { useState } from 'react'
import {Redirect, useLocation} from "react-router-dom";
import useLogin from '../hooks/useLogin';
import {useForm} from "react-hook-form";

function Login() {
  const {user,login,theme}=useLogin();
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const {pathname}=useLocation();
  

  if(user && pathname==="/login" ) return <Redirect to="/chat" />

  return (
    <div className={`login-wrapper ${theme==="dark"&&"login-wrapper-dark"}`}>
      <p className={`${theme==="dark"&&"p-dark"}`} >Log in to your account</p>
      <form onSubmit={() => {
          login(username);
        }}>
      <div className="txt">
        <input type="text" className={`input-txt ${theme==="dark"&&"input-txt-dark"}`} placeholder="User Name" onChange={(e) => {
          setUsername(e.target.value);
        }} required/>
      </div>
      
      <div className="txt">
        <input type="text"  className={`input-txt ${theme==="dark"&&"input-txt-dark"}`} placeholder="First Name" onChange={(e) => {
          setFirstname(e.target.value);
        }} required/>
      </div>
      
      <div className="txt">
        <input type="text" re className={`input-txt ${theme==="dark"&&"input-txt-dark"}`} placeholder="Last Name" onChange={(e) => {
          setLastname(e.target.value);
        }} required/>
      </div>
      <div className="login-button">
        <button >LOGIN</button>
      </div>
      </form>
    </div>
  )
}

export default Login;
