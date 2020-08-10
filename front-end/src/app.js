import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Home from "./home/Home";
import { withStyles } from "@material-ui/core/styles";
import LanguageContainer from "./flashcard/LanguageContainer";
import Navbar from "../src/nav//Navbar";
import { Route, Switch } from "react-router-dom";

const styles = (theme) => ({
  paddingTop: {
    padding: "2em",
  },
});

export const App = () => {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Container maxWidth="lg">
        <Home />
        {/* <LanguageContainer /> */}
      </Container>
    </>
  );
};
