import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const NavBar = ({ currentUser, handleLogout }) => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <div>
              <Link to="/home">Home</Link>
            </div>
          </li>
          {currentUser ? (
            <>
              <li>
                <Link to="/profile">Profile</Link>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </>
          ) : (
            <div id="rightMenu">
              <li>
                <Link to="/signup">Signup</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </div>
          )}
        </ul>
      </nav>
    </header>
  );
};
export default NavBar;
