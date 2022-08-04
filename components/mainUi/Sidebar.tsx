import Link from "next/link";
import React from "react";
import styles from "../../styles/Sidebar.module.css";
import Button from "../Button";
import SidebarItems from "./SidebarItem";

function Sidebar({
  items,
  buttons,
  title,
}: {
  items: { src: string; name: string }[];
  buttons: string[];
  title: string;
}) {
  return (
    <div className={styles.sidebar}>
      <Link href="/">
        <a className={styles.title}>{title}</a>
      </Link>
      <SidebarItems items={items} className={styles.item} />
      {buttons.map((button) => (
        <Button>{button}</Button>
      ))}
    </div>
  );
}

export default Sidebar;
