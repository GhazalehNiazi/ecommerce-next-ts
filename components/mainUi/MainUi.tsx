import React from "react";
import Sidebar from "./Sidebar";
import styles from "../../styles/Home.module.css";
import Rightside from "./Rightside";
import { sidebarItems } from "../types";
function MainUi({
  items,
  buttons,
  children,
  title,
}: {
  items: sidebarItems[];
  buttons: string[];
  children: any;
  title: string;
}) {
  return (
    <div className={styles.main}>
      <Sidebar items={items} buttons={buttons} title={title} />
      <Rightside>{children}</Rightside>
    </div>
  );
}

export default MainUi;
