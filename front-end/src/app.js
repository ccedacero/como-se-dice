import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/core/styles";
import LanguageContainer from "./flashcard/LanguageContainer";
import FlashCard from "./flashcard/FlashCard";
const styles = (theme) => ({
  paddingTop: {
    padding: "2em",
  },
});

export const App = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <LanguageContainer />
      </Container>
    </>
  );
};
