import React, { useEffect, useState } from 'react'
import useLogin from '../../../hooks/useLogin';
import UserList from './UserList';

export default function MessageInput() {
  const [msg,setMsg]=useState();
  const {newSelectedUser,theme,selectedUser}=useLogin();
  const change=((e)=>{
    setMsg(e.target.value);
  })
  return (
    <>
    {
      selectedUser&&
    
    <div className="message-input">
      <form onSubmit={()=>{
        newSelectedUser(msg);
        setMsg("");
        }}>
      <input className={`${theme==="dark"&&"message-input-dark"}`} type="text" placeholder="Type" value={msg} onChange={change}></input>
      <button >SEND</button> 
        </form>
      
    </div>
}
    
    </>
  )
}
