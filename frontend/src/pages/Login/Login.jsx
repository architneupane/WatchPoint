import "../Login/Login.css";
import axios from "axios";
import { UserContext } from "../../Context/UserContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import toast from 'react-hot-toast'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("")
  const {user, setUser} = useContext(UserContext)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

      await axios.post(
        "http://localhost:8000/api/users/login",
        { email, password },
        { withCredentials: true }
      )
      .then(res =>{
        setUser(res.data.data); 
        toast.success(res?.data?.message)
        navigate('/')
      })
      .catch ((err) => {
      if (err.response) {
        setError(
          err.response?.data?.message || "Internal Server Failure"
        )
      } else {
        console.log("Server not responding or CORS error");
      }
    })
  };

  const hanldeGoogleLogin = () => {
    window.open('http://localhost:8000/api/users/google', '_self')
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">User Login</h1>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-box">
            <label htmlFor="email">Email</label> 
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-box">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && (
            <p className="error">{error}</p>
          )}
          <button type="submit">Login</button>
        </form>
        <span className="login-with-google" >Or Login with Google</span><br />
        <button className="google-login-button" onClick={hanldeGoogleLogin}><FcGoogle /></button>
      </div>
    </div>
  );
}

export default Login
