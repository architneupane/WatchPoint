import React from 'react'
import '../Login/Login.css'

function Login() {
  return (
    <div className="login-container">
    <div className='login-card'>
        <h1 className='login-title' >Login User</h1>
        <form action="" className="login-form">
            <div className="input-box">
            <label for='email' >Email</label> <br />
            <input type="email" name='email' id='email' placeholder='Email' />
            </div>
           
            <div className="input-box">
            <label for='password' >Password</label> <br />
            <input type="password" name="password" id='password' placeholder='Password' />  
            </div>
            <button>Login</button>
        </form>
    </div>
    </div>

  )
}

export default Login