import React from 'react'

const LogIn = () => {
  return (
    <div>
        <>
    <form className='d-flex flex-column'>
        <input  className='rounded-pill border border none p-1' placeholder='Email'/>
        <input className='rounded-pill border border none my-2 p-1' placeholder='Password'/>
    </form>
    </>
    </div>
  )
}

export default LogIn