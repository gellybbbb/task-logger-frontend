import React from 'react'
import { Link } from 'react-router-dom'



function LoginForm() {
  return (
    <div>
      <h1 className='login-title'>Login Form</h1>
       
       <div className='login-form'>
           <form className='container'>
             <label>Username</label>
             <input type='' placeholder="username"/>
             <label>Password</label>
             <input type='' placeholder="password"/>
             <button >Login</button>
             <Link to="/register">Register</Link>
           </form>
       </div>
    </div>
  )
}

export default LoginForm
