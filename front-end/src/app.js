import React, { useState, useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Vocabulario from "./home/Vocabulario";
import Navbar from "./nav/Navbar";
import { withStyles } from "@material-ui/core/styles";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import { Alphabet } from "./flashcard/alphabet/Alphabet";
import { Vocab } from "./flashcard/vocab/Vocab";
import { QuizzesContainer as pruebas } from "./quizes/QuizzesContainer";
import SignIn from "./signin/SignIn";
import SignUp from "./signup/SignUp";
import Quiz from "./quizes/payquiz/Quiz";
import { payLoad } from "./constants/index";
const styles = (theme) => ({
  paddingTop: {
    padding: "2em",
  },
});

const App = (props) => {
  const [state, setState] = useState({
    currentUser: null,
  });

  useEffect(() => {
    if (localStorage.token) {
      fetch(`http://localhost:3000/autologin`, payLoad)
        .then((r) => r.json())
        .then((data) => {
          if (!data.error) {
            handleLogin(data);
          }
        });
    }
  }, []);

  const updateUser = (newUser) => {
    setState({ currentUser: newUser });
    // props.history.push("/vocabu")
  };

  const handleLogin = (currentUser) => {
    setState({ currentUser });
    // if (state.currentUser !== null) {
    //   props.history.push("/vocabulario");
    // }
  };
  // console.log(state);

  const handleLogOut = () => {
    localStorage.clear();
    setState({ currentUser: null });
    props.history.push("/login");
  };
  if (state.currentUser !== null) {
    console.log(state.currentUser.username);
  }
  return (
    <div>
      <CssBaseline />
      <Navbar currentUser={state.currentUser} handleLogOut={handleLogOut} />
      <main>
        <Switch>
          <Route exact path="/signup">
            <SignUp exact history={props.history} handleLogin={handleLogin} />
          </Route>
          <Route exact path="/login">
            <SignIn history={props.history} handleLogin={handleLogin} />
          </Route>

          <Container maxWidth="lg">
            {/* THESE TWO ARE K USING THE SAME ALPHABET COMPONENT  */}
            <Route exact path="/vocabulario" component={Vocabulario} />
            <Route path="/vocabulario/:id" component={Alphabet} />
            {/* <Route exact path="/vocabulario/:name/" component={Vocab} /> */}

            {/* <Route exact path="/vocabulario/Vocales" component={Vocales} /> */}

            {/* <Route exact path="/Vocales"  component={Vocales} /> */}
            {/* <Route exact path="/Pago" component={Pago} /> */}
            {/* Quizes below */}
            <Route exact path="/pruebas" component={pruebas} />
            <Route path="/pruebas/:id" component={Quiz} />
          </Container>
        </Switch>
      </main>
    </div>
    // </Router>
  );
};

export default withRouter(App);
