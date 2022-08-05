import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import Header from "../../components/Header";
import MainUi from "../../components/mainUi/MainUi";
import ShoppingItems from "../../components/ShoppingItems";

const items: { src?: string; name: string; filter?: boolean }[] = [
  { name: "price", filter: true },
  { name: "category", filter: true },
  { name: "material", filter: true },
  { name: "color", filter: true },
];
const buttons: string[] = ["applyfilter", "delete"];

function shopping() {
  const router = useRouter();
  const { category } = router.query;

  const selector = useSelector((state) => state.allProducts.products);
  console.log(selector);
  const products = selector.filter((item) => item.genre == category);
  console.log(products)

  return (
    <MainUi items={items} buttons={buttons} title="MABELINO.">
      <Header />
      <ShoppingItems products={products}/>
    </MainUi>
  );
}

export default shopping;
