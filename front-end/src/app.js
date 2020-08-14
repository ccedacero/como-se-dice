import React, { useState, useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Vocabulario from "./home/Vocabulario";
import { Vowels as Vocales } from "./flashcard/vowels/Vowels";
import Navbar from "./nav/Navbar";
import { Alphabet as Abecedario } from "./flashcard/alphabet/Alphabet";
import { withStyles } from "@material-ui/core/styles";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";

import { Vocab as Pago } from "./flashcard/vocab/Vocab";
import { QuizzesContainer as Pruebas } from "./quizes/QuizzesContainer";
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
    setState(currentUser);
    if (state.currentUser !== null) {
      props.history.push("/vocabulario");
    }
  };
  console.log(state);

  const handleLogOut = () => {
    localStorage.clear();
    setState({ currentUser: null });
    props.history.push("/login");
  };

  return (
    // <Router>
    <div>
      <CssBaseline />
      <Navbar currentUser={state.currentUser} handleLogOut={handleLogOut} />
      <Switch>
        <Route path="/SignUp">
          <SignUp handleLogin={handleLogin} />
        </Route>
        <Route path="/login">
          <SignIn handleLogin={handleLogin} />
        </Route>

        <Container maxWidth="lg">
          <Route path="/vocabulario" exact component={Vocabulario} />
          <Route path="/vocabulario/Abecedario" exact component={Abecedario} />

          <Route path="/vocabulario/Vocales" exact component={Vocales} />
          <Route path="/vocabulario/Pago" exact component={Pago} />
          {/* Quizes below */}
          <Route path="/pruebas" exact component={Pruebas} />
          <Route path="/pruebas/:id" component={Quiz} />
          <Route path="/home">
            {state.currentUser ? (
              <h1>Welcome, {state.currentUser}</h1>
            ) : (
              <Redirect to="/" />
            )}
          </Route>
        </Container>
      </Switch>
    </div>
    // </Router>
  );
};

export default withRouter(App);
