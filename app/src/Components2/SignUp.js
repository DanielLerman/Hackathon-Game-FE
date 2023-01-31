import React, { useContext, useState } from "react";
import { GameContext } from '../Contextprovider';
import axios from "axios";

const SignUp = () => {
    const { userInfo, setUserInfo} = useContext(GameContext);
    const handleChange=(e)=>{
        e.preventDefault() 
        setUserInfo({ ...userInfo, [e.target.id]: e.target.value })
        console.log(userInfo)
      }
    // const addUser =async(e)=>{
    //   e.preventDefault() 
    //     try{
    //            const res=await axios.post('http://localhost:8080/users/signUp',{...userInfo})
    //            console.log(res.data)

    //     }catch(err){console.log(err)}
    // }

  return (
    <>
    <form className='d-flex flex-column'>
        <input className='rounded-pill border border none my-2 p-1' id="nickName" placeholder='Name' onChange={handleChange} value={userInfo.nickName}/>
        <input  className='rounded-pill border border none p-1' id="email" placeholder='Email' onChange={handleChange} value={userInfo.email}/>
        <input className='rounded-pill border border none my-2 p-1' id="password" placeholder='Password' onChange={handleChange} value={userInfo.password}/>
        <span className='align-self-center'>Confirm Password</span>
        <input className='rounded-pill border border none my-2 p-1' id="repassword" placeholder='Password' onChange={handleChange} value={userInfo.repassword}/>
    </form>
    </>
  )
}

export default SignUp
