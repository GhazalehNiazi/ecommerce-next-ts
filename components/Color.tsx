import React from "react";
import styles from "../styles/order.module.css";
function Color({ colors }: { colors: string[] }) {
  const finalColor = colors.map((color) =>
    color.includes("#") ? (
      <span
        style={{ backgroundColor: color }}
        className={styles["details-color"]}
      ></span>
    ) : (
      <span>{color}</span>
    )
  );
  return <div className={styles["detail-color_container"]}>{finalColor}</div>;
}

export default Color;
