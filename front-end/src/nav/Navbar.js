import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Button from "@material-ui/core/Button";
const NavBar = ({ currentUser, handleLogOut }) => {
  console.log(currentUser);
  // debugger;
  return (
    <header>
      <nav>
        <ul>
          <li>
            <div>
              <button>
                <Link to="/vocabulario">Home</Link>
              </button>
            </div>
          </li>
          {currentUser ? (
            <>
              <div class="rightMenu">
                <li>
                  <Link to="/pruebas">Pruebas</Link>
                </li>
                <li>
                  <button onClick={handleLogOut}>Logout</button>
                </li>
              </div>
            </>
          ) : (
            <div class="rightMenu">
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
