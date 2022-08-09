import React from "react";
import styles from "../styles/Header.module.css";
import Link from "next/link";
import { sidebarItems } from "./types";
const items: sidebarItems[] = [
  { name: "Home", src: "/" },
  { name: "Favorite", src: "" },
  { name: "account", src: "/login" },
  { name: "catalog", src: "/catalog" },
  { name: "Cart", src: "/cart" },
];

function Header() {
  return (
    <div className={styles.header}>
      <ul className={styles.ul}>
        {items.map((item) => (
          <Link href={item.src}>
            <a>{item.name}</a>
          </Link>
        ))}
      </ul>
      <input placeholder="search" />
    </div>
  );
}

export default Header;
