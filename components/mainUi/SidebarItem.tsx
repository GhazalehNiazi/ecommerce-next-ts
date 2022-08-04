import React from "react";
import Link from "next/link";
import styles from "../../styles/Sidebar.module.css";

function SidebarItems({
  items,
  className,
}: {
  items: { src: string; name: string }[];
  className: string;
}) {
  return (
    <div className={styles.itemContainer}>
      {items.map((item) => (
        <Link href={item.src}>
          <a className={styles.item}>{item.name}</a>
        </Link>
      ))}
    </div>
  );
}

export default SidebarItems;
