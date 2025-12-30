import "./Navbar.css";
import axios from "axios";
import { useContext, useEffect } from "react";
import { UserContext } from "../../Context/UserContext";
import { FiSearch } from "react-icons/fi";
import { PiHandbagBold } from "react-icons/pi";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    axios
      .post(
        "http://localhost:8000/api/users/logout",
        {},
        { withCredentials: true }
      )
      .then(() => {
        setUser(null);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/users/verify", { withCredentials: true })
      .then((res) => {
        setUser(res.data.data);
      })
      .catch(() => {
        console.log("User not Authenticate");
      });
  }, []);

  return (
    <div className="navbar">
      <ul className="nav-categories">
        <li>
          <NavLink to="/men">Men</NavLink>
        </li>
        <li>
          <NavLink to="/women">Women</NavLink>
        </li>
        <li>
          <NavLink to="/kids">Kids</NavLink>
        </li>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
      </ul>

      <div className="logo">
        <NavLink to="/">
          <h1 style={{ fontFamily: "Tektur, sans-serif" }}>WATCHPOINT</h1>
        </NavLink>
      </div>

      <ul className="userPart">
        {user ? (
          <>
            <li className="search-icon">
              <FiSearch />
            </li>
            <li className="cart-icon">
              <NavLink to="/cart">
                <PiHandbagBold />
              </NavLink>
            </li>
            <p className="username">{user.username}</p>
            <button className="logout-button" onClick={handleLogout}>
              LogOut
            </button>
          </>
        ) : (
          <>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
            <li style={{ paddingLeft: "40px" }}>
              <NavLink to="/login">Login</NavLink>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}

export default Navbar;
