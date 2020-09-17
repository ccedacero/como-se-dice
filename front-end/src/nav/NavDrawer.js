import React from "react";
import Drawer from "@material-ui/core/Drawer";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

export class NavDrawer extends React.Component {
  render() {
    return (
      <Drawer
        anchor="right"
        open={this.props.drawerOpened}
        onClose={this.props.toggleDrawer(false)}
      >
        <div
          onClick={this.props.toggleDrawer(false)}
          onKeyDown={this.props.toggleDrawer(false)}
        >
          <ul>
            <li>
              {/* <Hidden smDown> */}
              <Button color="inherit" component={Link} to="/forum">
                Forum
              </Button>
            </li>
            {/* CONDITIONALS FOR NAV BAR DISPLAY */}
            {this.props.loggedIn !== "null" || !this.props.loggedIn ? (
              <>
                <li>
                  <Button color="inherit" component={Link} to="/applications">
                    My Applications
                  </Button>
                </li>
                <li>
                  <Button color="inherit" component={Link} to="/interviews">
                    My Interviews
                  </Button>
                </li>
                <li>
                  <Button
                    color="inherit"
                    onClick={this.props.handleLogout}
                    to="/logout"
                  >
                    Logout
                  </Button>
                </li>
                <li>
                  <Button color="inherit">{this.props.user_name}</Button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Button color="inherit" component={Link} to="/login">
                    Login
                  </Button>
                </li>
                <li>
                  <Button color="inherit" component={Link} to="/signup">
                    Signup
                  </Button>
                </li>
              </>
            )}
          </ul>
        </div>
      </Drawer>
    );
  }
}
