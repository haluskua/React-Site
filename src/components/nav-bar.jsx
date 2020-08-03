import React, { Component } from "react";
import styles from "./navbar.scss";

class Navbar extends Component {
  render() {
    return (
      <div className={styles.nav_header}>
        <h1>I am navbar</h1>
      </div>
    );
  }
}

export default Navbar;
