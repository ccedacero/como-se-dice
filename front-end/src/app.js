import React, { useState, useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Vocabulario from "./home/Vocabulario";
import Navbar from "./nav/Navbar";
import { Route, withRouter, Redirect } from "react-router-dom";
import { Alphabet } from "./flashcard/alphabet/Alphabet";
import { Vocab } from "./flashcard/vocab/Vocab";
import { QuizzesContainer as pruebas } from "./quizes/QuizzesContainer";
import SignIn from "./signin/SignIn";
import SignUp from "./signup/Signup";
import {Quizparent} from "./quizes/payquiz/Quizparent";
import { payLoad } from "./constants/index";
import { HomeLanding } from "./dashboard/Home";
import { Translator } from "./translation/Translate";
import { NewCard } from "./createvocab/NewCard";
import CircularProgressWithLabel from "./createvocab/Progress";

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
    fetch(`http://localhost:3000/autologin`, payLoad)
      .then((r) => r.json())
      .then((data) => {
        if (!data.error) {
          handleLogin(data);
        }
      });
  }, [localStorage.getItem('token')]);

  const updateUser = (newUser) => {
    setState({ currentUser: newUser });
  };

  const handleLogin = (currentUser) => {
    setState({ currentUser });

  };

  const handleLogOut = () => {
    localStorage.clear();
    setState({ currentUser: null });
    props.history.push("/login");
  };

  return (
    <div>
      <CssBaseline />
      <Navbar currentUser={state.currentUser} handleLogOut={handleLogOut} />
      <main>
        {/* <Switch> */}
        <Route exact path="/signup">
          <SignUp exact history={props.history} handleLogin={handleLogin} />
        </Route>
        <Route exact path="/login">
          <SignIn history={props.history} handleLogin={handleLogin} />
        </Route>
        <Route exact path="/home">
          <HomeLanding history={props.history} />
        </Route>
        <Container maxWidth="lg">
          {/* THESE TWO ARE K USING THE SAME ALPHABET COMPONENT  */}
          <Route
            exact
            path="/vocabulario"
            currentUser={state.currentUser}
            component={Vocabulario}
          />
          {/* ALPHABET RENDERS ALL FLASHCARDS */}
          <Route
            path="/vocabulario/:id"
            currentUser={state.currentUser}
            component={Alphabet}
          />

          {/* {THIS IS THE QUIZ SECTION} */}
          <Route exact path="/pruebas" component={pruebas} />
          <Route path="/pruebas/:id" component={Quizparent} />

          {/* {Tranlation} */}
          <Route exact path="/translate" component={Translator} />
          {/* {Add Vocab Card} */}
          <Route exact path="/addvocab" component={NewCard} />
          <Route
            exact
            path="/loading"
            component={CircularProgressWithLabel}
          />
        </Container>
        {/* </Switch> */}
      </main>
    </div>
  );
};

export default withRouter(App);
