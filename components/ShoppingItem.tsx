import React from "react";
import Image from "next/image";
import styles from "../styles/Shopping.module.css";
import { Product } from "./types";
import chair from '../public/chair.jpg'
function ShoppingItem(props) {
  const {
    id,
    name,
    genre,
    available,
    stock,
    discount,
    price,
    colors,
    size,
    img,
  }: Product = props.product;

  return (
    <div>
      <div className={styles.item}>
        {img && <Image src={chair} width={250} height={250} />}
      </div>
      <div>
        <h1>{name}</h1>
        <h3>{genre}</h3>
        <h3>{price}</h3>
        <h3>{discount}</h3>
        <h5>{available ? "available" : "not available"}</h5>
      </div>
    </div>
  );
}

export default ShoppingItem;
