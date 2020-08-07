import React from "react";
import Button from "./button/button";
import styles from "./styles/main.scss";
import FancyButton from "./fancy-button/fancy-button";
import Navbar from "./components/nav-bar";
import image from "./images/usd.png";
import { AppContainer } from "./App.styles";
import { Collapsible } from "./components";

function App() {
  return (
    <AppContainer>
      <header>
        <img src={image} alt="USA" />
        <h1>Styled-components</h1>
      </header>
      <Collapsible />
    </AppContainer>
  );
}

export default App;
