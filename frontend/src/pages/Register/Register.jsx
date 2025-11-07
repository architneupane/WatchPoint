import React from 'react'
import '../Register/Register.css'

function Register() {
  return (
    <div className='register-container'>
     <div className="register-card">
        <h1 className="register-title">
            Register as User
        </h1>
        <form action="" className="register-form">
            <div className="input-box">
                <label for='username'>Username</label>
                <input type="text" name='username' id='username' placeholder='Username' />
            </div>
            <div className="input-box">
                <label for='email'>Email</label>
                <input type="email" name='email' id='email' placeholder='Email' />
            </div>
             <div className="input-box">
                <label for='password'>Password</label>
                <input type="password" name='password' id='password' placeholder='Password' />
            </div>
            <button>Submit</button>
        </form>
     </div>
    </div>
  )
}

export default Register