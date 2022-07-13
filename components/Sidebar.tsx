import Link from "next/link";
import React from "react";
import styles from "../styles/Sidebar.module.css";
import Items from "./Items";

function Sidebar() {
  const items: string[] = ["Home", "Favorite", "Balance", "Chat", "Chat"];

  return (
    <div className={styles.sidebar}>
      <Link href='/'>
        <a className={styles.title}>MABELINO.</a>
      </Link>
      <Items items={items} className={styles.item} />
      <h4>be premium</h4>
    </div>
  );
}

export default Sidebar;
