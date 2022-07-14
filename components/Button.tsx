import React from "react";
import styles from "../styles/button.module.css";
function Button(props) {
  return <button className={styles.button}>{props.children}</button>;
}

export default Button;
