import React from "react";
import styles from '../styles/Maincontent.module.css'
function Top() {
  return (
    <div className={styles.top}>
      <div className={styles.topTitle}>
        <h1>Best Furniture</h1>
        <h3>For Your House</h3>
      </div>
      <div>
          <button className={styles.button}>cart</button>
      </div>
    </div>
  );
}

export default Top;
