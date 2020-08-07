import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`

${reset}

/* other styles go here */

html, body {
    height: 100%;
    background: #eae8e4;

  }
  div#root{
    height: 100%;
  }
`;

ReactDOM.render([<GlobalStyles />, <App />], document.getElementById("root"));

if (module.hot) {
  module.hot.accept();
}
