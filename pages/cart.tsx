import React from "react";
import ItemOrder from "../components/ItemOrder";
const items = [{}, {}];

function cart() {
  return (
    <div>
      <div>
        {items.map((item) => {
          <ItemOrder name={item.name} price={item.price} />;
        })}
      </div>
      <div>side bar</div>
    </div>
  );
}

export default cart;
