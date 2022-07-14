import React from "react";
import Header from "../components/Header";
import MainUi from "../components/MainUi";
import ShoppingItems from "../components/ShoppingItems";

const items: string[] = ["price", "category", "material", "color"];
const buttons: string[] = ["applyfilter", "delete"];

function shopping() {
  return (
    <MainUi items={items} buttons={buttons}>
      <Header/>
      <ShoppingItems/>
    </MainUi>
  );
}

export default shopping;
