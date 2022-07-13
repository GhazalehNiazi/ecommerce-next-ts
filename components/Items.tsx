import React from "react";
import Link from "next/link";
import styles from '../styles/Sidebar.module.css';

function Items({items,className}:{items:string[], className:string}) {
  return (
    <div className={styles.itemContainer}>
      {items.map((item) => (
        <Link href="/">
          <a className={styles.item}>{item}</a>
        </Link>
      ))}
    </div>
  );
}

export default Items;
