import React from "react";
import Input from "./Input";
import styles from "../styles/login.module.css";
import Button from "./Button";
import Link from "next/link";

function Login() {
  return (
    <div className={styles.loginContainer}>

      <div className={styles.login}>
        <Input label="Email" placeholder="" type="email" />
        <Input label="password" placeholder="" type="password" />

        <div className={styles.action}>
          <Button>Login</Button>
          <Link href="/">
            <a>Forgot Your Password?</a>
          </Link>
        </div>

        <div className={styles.method}>
          <h4>don't have an account?</h4>
          <Link href="/">
            <a>Sign Up</a>
          </Link>
        </div>

      </div>
      
    </div>
  );
}

export default Login;
