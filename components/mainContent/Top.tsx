import React from "react";
import styles from "../../styles/Maincontent.module.css";
import Button from "../Button";
function Top() {
  return (
    <div className={styles.top}>
      <div className={styles.topTitle}>
        <h1>Best Furniture</h1>
        <h3>For Your House</h3>
      </div>
      <div>
        <Button>cart</Button>
      </div>
    </div>
  );
}

export default Top;
