import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Hidden from "@material-ui/core/Hidden";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import { NavDrawer } from "./NavDrawer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  right: {
    marginLeft: "auto",
  },
}));

export default function Navbar(props) {
  const [state, setState] = useState({
    drawerOpened: false,
  });

  const classes = useStyles();
  const history = useHistory();

  //   const user_name = JSON.parse(window.localStorage.getItem("sojohub"))
  //     ? JSON.parse(window.localStorage.getItem("sojohub")).name
  //     : null;

  const toggleDrawer = (booleanValue) => () => {
    setState({
      drawerOpened: booleanValue,
    });
  };

  //   const handleLogout = () => {
  //     window.localStorage.setItem("sojohub", null);
  //     // return <Redirect to="/login" />;
  //     history.push("/login");
  //     props.setLoginState("null");
  //   };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="end"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <Hidden smUp>
              <MenuIcon />
            </Hidden>
          </IconButton>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            component={Link}
            // onClick={toggleDrawer(true)}
            // to={user_name ? "/" : "/login"}
          >
            ComoseDice?
          </IconButton>
          <Hidden smDown>
            <Button color="inherit" component={Link} to="/forum">
              Foro
            </Button>
            {/* CONDITIONALS FOR NAV BAR DISPLAY */}
            {/* {props.loggedIn !== "null" || !props.loggedIn ? */}(
            <>
              <Button color="inherit" component={Link} to="/applications">
                Aprender
              </Button>
              <Button color="inherit" component={Link} to="/interviews">
                Pruebas
              </Button>

              <Button
                color="inherit"
                // onClick={handleLogout}
                className={classes.right}
                to="/logout"
              >
                Logout
              </Button>
              <Button color="inherit">hola</Button>
            </>
            {/* ) : ( */}
            <>
              <Button
                color="inherit"
                className={classes.right}
                component={Link}
                to="/login"
              >
                Login
              </Button>
              <Button color="inherit" component={Link} to="/signup">
                Signup
              </Button>
            </>
            {/* )} */}
          </Hidden>
        </Toolbar>
      </AppBar>

      <NavDrawer
        drawerOpened={state.drawerOpened}
        toggleDrawer={toggleDrawer}
        // handleLogout={handleLogout}
        // user_name={user_name}
        loggedIn={props.loggedIn}
      />
    </div>
  );
}
