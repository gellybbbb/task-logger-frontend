import React from 'react'
import {Link} from 'react-router-dom'
function RegistrationForm() {
  return (
    <div>
        <h2>Registration</h2>
        <form>
        <label>Username</label>
             <input type='' placeholder="username"/>
             <label>Password</label>
             <input type='' placeholder="password"/>
             <button >Login</button>
             <Link to="/login">Login</Link>
        </form>
    </div>
  )
}

export default RegistrationForm
