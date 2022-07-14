import React from "react";
import MainContent from "./MainContent";
import Sidebar from "./Sidebar";
import styles from "../styles/Home.module.css";
import Rightside from "./Rightside";

function MainUi({
  items,
  buttons,
  children,
}: {
  items: string[];
  buttons: string[];
  children: any;
}) {
  return (
    <div className={styles.main}>
      <Sidebar items={items} buttons={buttons} />
      <Rightside>{children}</Rightside>
    </div>
  );
}

export default MainUi;
