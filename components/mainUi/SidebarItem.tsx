import React from "react";
import Link from "next/link";
import styles from "../../styles/Sidebar.module.css";
import { sidebarItems } from "../types";

function SidebarItems({
  items,
  className,
}: {
  items: sidebarItems[];
  className: string;
}) {
  return (
    <div className={styles.itemContainer}>
      {items.map(
        (item) =>
          item.hasOwnProperty("src") && (
            <Link href={item.src}>
              <a className={styles.item}>{item.name}</a>
            </Link>
          )
      )}
      {items.map(
        (item) =>
          item.hasOwnProperty("filter") && (
            <div>
              {item.name} <span>^</span>
            </div>
          )
      )}
    </div>
  );
}

export default SidebarItems;
