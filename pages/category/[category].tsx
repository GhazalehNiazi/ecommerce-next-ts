import { useRouter } from "next/router";
import React from "react";
import Header from "../../components/Header";
import MainUi from "../../components/mainUi/MainUi";
import ShoppingItems from "../../components/ShoppingItems";

const items: string[] = ["price", "category", "material", "color"];
const buttons: string[] = ["applyfilter", "delete"];

function shopping() {
  const router = useRouter();
  const {category} = router.query;

  return (
    <MainUi items={items} buttons={buttons} title="MABELINO." >
      <Header />
      <ShoppingItems />
    </MainUi>
  );
}

export default shopping;
