import React from "react";
import Image from "next/image";
import styles from "../styles/Shopping.module.css";

function ShoppingItem(items) {
  const {
    name,
    catalog,
    price,
    discount,
    available,
    image,
  }: {
    name: string;
    catalog: string;
    price: number;
    discount: number;
    available: boolean;
    image: string;
  } = items;

  return (
    <div>
      <div className={styles.item}>
        <Image src="/../public/lamp.jpg" width={250} height={250} />
      </div>
      <div>
        <h1>{name}</h1>
        <h3>{catalog}</h3>
        <h3>{price}</h3>
        <h3>{discount}</h3>
        <h5>{available ? "available" : "not available"}</h5>
      </div>
    </div>
  );
}

export default ShoppingItem;
