import "../Login/Login.css";
import axios from "axios";
import { UserContext } from "../../Context/UserContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

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
        console.log(res.data, "Login Successfully")
        navigate('/')
      })
      .catch ((err) => {
      if (err.response) {
        setError(
          err.response?.data?.message 
        )
      } else {
        console.log("Server not responding or CORS error");
      }
    })
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Login User</h1>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-box">
            <label htmlFor="email">Email</label> <br />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-box">
            <label htmlFor="password">Password</label> <br />
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
      </div>
    </div>
  );
}

export default Login
