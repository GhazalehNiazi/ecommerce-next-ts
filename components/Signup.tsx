import React from "react";
import Input from "./Input";
import styles from "../styles/login.module.css";
import Button from "./Button";
import Link from "next/link";
function Signup() {
  return (
    <div>
      <div className={styles.login}>
        <Input label="Name" placeholder="Ghazale Niazi Sabet" type="text" />
        <Input label="Email" placeholder="example@gmail.com" type="email" />
        <Input
          label="password"
          placeholder="at least 8 characters"
          type="password"
        />
        <Button>Sign Up</Button>

        <div className={styles.method}>
          <h4>already have an account?</h4>
          <Link href="/">
            <a>Login</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
