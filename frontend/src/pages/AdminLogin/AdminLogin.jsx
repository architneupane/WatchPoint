import React, { useState } from "react";
import axios from "axios";
import "../Login/Login.css";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        "http://localhost:8000/api/admin/admin-login",
        { username, password},
        {withCredentials: true}
      )
      .then(() => {
        navigate("/admin-dashboard");
      })
      .catch((err) => setError(err?.response?.data?.message));
  };

  return (
    <div className="login-container">
      <div className="login-card" style={{ height: "350px" }} >
        <h1 className="login-title">Admin Login</h1>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-box">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="input-box">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
