import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "fontsource-roboto";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.querySelector("#root")
);
