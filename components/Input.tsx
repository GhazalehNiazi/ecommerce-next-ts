import React from "react";
import styles from "../styles/Input.module.css";

function Input({
  label,
  placeholder,
  type,
}: {
  label: string;
  placeholder: string;
  type: string;
}) {
  return (
    <div className={styles.input}>
      <label>{label}</label>
      <input placeholder={placeholder} type={type} />
    </div>
  );
}

export default Input;
