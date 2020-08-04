import React, { Component, Fragment } from "react";
import Button from "./button/button";
import styles from "./styles/main.scss";
import FancyButton from "./fancy-button/fancy-button";
import Navbar from "./components/nav-bar";
const content = "Hello sometimes!";

const App = () => (
  <Fragment>
    <Navbar />
    <div className={styles["resizeable-both"]}>{content}</div>
    <Button label="Regular Button" />
    <FancyButton label="Fancy Button" />
  </Fragment>
);

export default App;
