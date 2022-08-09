import React from "react";
import Link from "next/link";
import styles from "../../styles/Sidebar.module.css";
import { sidebarItems } from "../types";
import { useState } from "react";
function SidebarItems({
  items,
  className,
}: {
  items: sidebarItems[];
  className: string;
}) {

  const [showDetail, setShowDetail] = useState(['']);
  const filterClickHandler = (id: string) => {
    console.log(id);

    if (!showDetail.includes(id)) {
      console.log("adding...");
      setShowDetail((prev) => [...prev, id]);
    } else {
      console.log("deleting...");
      setShowDetail((prev) => prev.filter((item) => item != id));
    }
  };

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
              <div
                className={styles.filteritem}
                onClick={filterClickHandler.bind(this, item.name)}
              >
                {item.name} <span>^</span>
              </div>
              <div
                className={
                  showDetail.includes(item.name)
                    ? styles.filteritemdetail
                    : styles.hide
                }
              >
                mmm
              </div>
            </div>
          )
      )}
    </div>
  );
}

export default SidebarItems;
