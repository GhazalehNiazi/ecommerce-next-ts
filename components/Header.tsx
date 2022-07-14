import React from "react";
import styles from "../styles/Header.module.css";
import Link from "next/link";
const items: string[] = ["Home", "Favorite", "account", "catalog", "Cart"];

function Header() {
  return (
    <div className={styles.header}>
      <ul className={styles.ul}> 
        {items.map((item) => (
            <Link href='/'>
          <a>{item}</a>
            </Link>
        ))}
      </ul>
      <input placeholder="search"/>
    </div>
  );
}

export default Header;
