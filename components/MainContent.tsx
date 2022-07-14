import React from "react";
import styles from "../styles/Home.module.css";
import Bottom from "./Bottom";
import Middle from "./Middle";
import Top from "./Top";

function MainContent() {
  return (
    <div >
      <Top />
      <Middle />
      <Bottom />
    </div>
  );
}

export default MainContent;
