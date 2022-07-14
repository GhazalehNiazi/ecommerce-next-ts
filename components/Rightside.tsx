import React from "react";
import styles from "../styles/Home.module.css";

function Rightside(props) {
  return <div className={styles.maincontent}>{props.children}</div>;
}

export default Rightside;
