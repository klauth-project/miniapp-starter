import React from "react";
import { Link } from "react-router-dom";

const styles = {
  a: {
    textDecoration: "none",
    color: "blue",
  },
  div: {
    fontSize: "1.0em",
    fontFamily: "sans-serif",
  },
};

export default function () {
  return (
    <React.Fragment>
      <div style={styles.div}>
        <h1>Second Screen</h1>
        <Link style={styles.a} to="/">
          Back to Home
        </Link>
      </div>
    </React.Fragment>
  );
}
