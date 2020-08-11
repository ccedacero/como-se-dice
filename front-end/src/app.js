import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Vocabulario from "./home/Vocabulario";
import { Vowels as Vocales } from "./flashcard/vowels/Vowels";
import Navbar from "../src/nav/Navbar";
import { Alphabet as Abecedario } from "./flashcard/alphabet/Alphabet";
import { withStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Vocab as Pago } from "../src/flashcard/vocab/Vocab";
import { QuizzesContainer as Pruebas } from "../src/quizes/QuizzesContainer";
import { Quiz as PagoQuiz } from "../src/quizes/payquiz/Quiz";
const styles = (theme) => ({
  paddingTop: {
    padding: "2em",
  },
});

export const App = () => {
  return (
    <Router>
      <div>
        <CssBaseline />
        <Navbar />
        <Container maxWidth="lg">
          <Switch>
            <Route path="/vocabulario" exact component={Vocabulario} />
            <Route
              path="/vocabulario/Abecedario"
              exact
              component={Abecedario}
            />
            <Route path="/pruebas" exact component={Pruebas} />
            <Route path="/vocabulario/Vocales" exact component={Vocales} />
            <Route path="/vocabulario/Pago" exact component={Pago} />
            {/* Quizes below */}
            <Route path="/pruebas/Pago" exact component={PagoQuiz} />
          </Switch>
        </Container>
      </div>
    </Router>
  );
};
