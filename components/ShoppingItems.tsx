import React from "react";
import Image from "next/image";
import ShoppingItem from "./ShoppingItem";
import styles from '../styles/Shopping.module.css';
import { Product } from "./types";

function ShoppingItems(props) {
  console.log(props.products)

  return (
    <div>
      <div className={styles.itemsContainer}> 
        {props.products.map((item:Product) => (
          <ShoppingItem product={item} />
        ))}
      </div>
    </div>
  );
}

export default ShoppingItems;
