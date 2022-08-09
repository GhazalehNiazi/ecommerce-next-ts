import React from "react";
import Image from "next/image";
import styles from "../styles/Shopping.module.css";
import { Product } from "./types";
import Link from "next/link";
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
    <div className={styles.item}>
      <div>{img && <Image src={img} width={250} height={250} />}</div>
      <div className={styles.itemDetail}>
        <div className={styles.itemDetailFirstLine}>
      <Link href={`/order/${id}`}>
          <h1>{name}</h1>
    </Link>
          <h3>{genre}</h3>
        </div>
        <h3>{price}$</h3>
        {discount ? <h3>{discount} OFF</h3> : ""}
        <h3>{available ? "available" : "not available"}</h3>
      </div>
    </div>
  );
}

export default ShoppingItem;
