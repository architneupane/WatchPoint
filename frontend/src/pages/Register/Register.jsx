import "../Register/Register.css";
import axios from "axios";
import { useState } from "react";
import {useNavigate} from 'react-router-dom'


function Register() {

  const navigate = useNavigate()
  const [error, setError] = useState("")

  const [formData, setFromData] = useState({
    username: "",
    email: "",
    password: "",
    phoneNo: "",
  });

  const handleChange = (e) => {
    setFromData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:8000/api/users/register",
        formData,
        { withCredentials: true }
      );
      navigate('/login')
    } catch (err) {
      setError(
        err.response?.data?.message || "Something went wrong"
      )
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h1 className="register-title">Register as User</h1>
        <form onSubmit={handleSubmit} className="register-form">
          <div className="input-box">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              onChange={handleChange}
            />
          </div>
          <div className="input-box">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              onChange={handleChange}
            />
          </div>
          <div className="input-box">
            <label htmlFor="phoneNo">Phone Number</label>
            <input
              type="number"
              name="phoneNo"
              id="phoneNo"
              placeholder="Phone Number"
              onChange={handleChange}
            />
          </div>
          <div className="input-box">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={handleChange}
            />
          </div>
          {error && (
            <p className="error" > {error} </p>
          )}
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
