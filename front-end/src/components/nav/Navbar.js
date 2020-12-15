import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Button from "@material-ui/core/Button";
const NavBar = ({ currentUser, handleLogOut }) => {
  console.log(currentUser)
  return (
    <header>
      <nav>
        {currentUser && localStorage.token ? (
          <>
            <ul className="homeLink">
              <li>
                <Link to="/home">Home</Link>
              </li>
            </ul>
            <ul className="rightMenuUser">
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
          </>
        ) : (
            <>
              <ul>
                <li>
                  <Link to="/signup">Signup</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </ul>
            </>
          )}
      </nav>
    </header>
  );
};
export default NavBar;
