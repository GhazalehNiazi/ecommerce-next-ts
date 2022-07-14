import Link from "next/link";
import React from "react";
import styles from "../styles/Sidebar.module.css";
import Button from "./Button";
import Items from "./Items";

function Sidebar({ items, buttons }: { items: string[]; buttons: string[] }) {
  return (
    <div className={styles.sidebar}>
      <Link href="/">
        <a className={styles.title}>MABELINO.</a>
      </Link>
      <Items items={items} className={styles.item} />
      {buttons.map((button) => (
        <Button>{button}</Button>
      ))}
    </div>
  );
}

export default Sidebar;
