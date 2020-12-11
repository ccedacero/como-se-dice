import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import "fontsource-roboto";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.querySelector("#root")
);
