import React, { useState, useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Vocabulario from "./home/Vocabulario";
import { Vowels as Vocales } from "./flashcard/vowels/Vowels";
import Navbar from "../src/nav/Navbar";
import { Alphabet as Abecedario } from "./flashcard/alphabet/Alphabet";
import { withStyles } from "@material-ui/core/styles";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  withRouter,
  useHistory,
} from "react-router-dom";

import { Vocab as Pago } from "../src/flashcard/vocab/Vocab";
import { QuizzesContainer as Pruebas } from "../src/quizes/QuizzesContainer";
import SignIn from "../src/signin/SignIn";
import SignUp from "../src/signup/SignUp";
import Quiz from "./quizes/payquiz/Quiz";
const styles = (theme) => ({
  paddingTop: {
    padding: "2em",
  },
});

export const App = (props) => {
  const [state, setState] = useState({
    currentUser: null,
  });

  const history = useHistory();

  useEffect(() => {
    if (localStorage.token) {
      fetch(`http://localhost:3000/autologin`, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      })
        .then((r) => r.json())
        .then((data) => {
          if (!data.error) {
            setState(data);
          }
        });
    }
  }, []);

  const updateUser = (newUser) => {
    setState({ currentUser: newUser });
  };

  const handleLogin = (currentUser) => {
    setState(currentUser);
  };
  console.log(state);

  const handleLogOut = () => {
    localStorage.clear();
    setState({ currentUser: null });
  };

  return (
    <Router>
      <div>
        <CssBaseline />
        <Navbar />
        <Switch>
          <Route path="/SignUp">
            <SignUp setState={setState} handleLogin={handleLogin} />
          </Route>
          <Route path="/login">
            <SignIn setState={setState} handleLogin={handleLogin} />
          </Route>

          <Container maxWidth="lg">
            <Route path="/vocabulario" exact component={Vocabulario} />
            <Route
              path="/vocabulario/Abecedario"
              exact
              component={Abecedario}
            />

            <Route path="/vocabulario/Vocales" exact component={Vocales} />
            <Route path="/vocabulario/Pago" exact component={Pago} />
            {/* Quizes below */}
            <Route path="/pruebas" exact component={Pruebas} />
            <Route path="/pruebas/:id" component={Quiz} />
          </Container>
        </Switch>
      </div>
    </Router>
  );
};
