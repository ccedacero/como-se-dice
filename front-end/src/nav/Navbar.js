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
            <Link to="/home">Home</Link>
          </li>
        </ul>
        {currentUser ? (
          <>
            <div class="leftMenu">
              <ul>
                <li>
                  <Link to="/vocabulario">Vocabulario</Link>
                </li>
                <li>
                  <Link to="/pruebas">Pruebas</Link>
                </li>
                <li>
                  <Link to="/translate">Traductor</Link>
                </li>
                <li>
                  <Link to="/addvocab">Agregar</Link>
                </li>
                <li>
                  <Button
                    variant="contained"
                    onClick={handleLogOut}
                    style={{ backgroundColor: "#95e1d3" }}
                    href="#contained-buttons"
                  >
                    Logout
                  </Button>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <div class="rightMenu">
            <ul>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};
export default NavBar;
