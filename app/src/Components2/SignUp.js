import React, { useContext, useState } from "react";
import { GameContext } from '../Contextprovider';

const SignUp = () => {
    const { } = useContext(GameContext);
    const [userInfo, setUserInfo]=useState({userName:'',email:'',password:'',repassword:''});
    const handleChange=(e)=>{
        e.preventDefault() 
        setUserInfo({ ...userInfo, [e.target.id]: e.target.value })
      }
    // const addUser =async()=>{
    //     try{

    //     }catch(err){console.log(err)}
    // }

  return (
    <>
    <form className='d-flex flex-column'>
        <input className='rounded-pill border border none my-2 p-1' id="userName" placeholder='Name' onChange={handleChange} value={userInfo.userName}/>
        <input  className='rounded-pill border border none p-1' id="email" placeholder='Email' onChange={handleChange} value={userInfo.email}/>
        <input className='rounded-pill border border none my-2 p-1' id="password" placeholder='Password' onChange={handleChange} value={userInfo.password}/>
        <span className='align-self-center'>Confirm Password</span>
        <input className='rounded-pill border border none my-2 p-1' id="repassword" placeholder='Password' onChange={handleChange} value={userInfo.repassword}/>
    </form>
    </>
  )
}

export default SignUp
