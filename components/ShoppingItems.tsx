import React from "react";
import Image from "next/image";
import ShoppingItem from "./ShoppingItem";
import styles from '../styles/Shopping.module.css';

const items: {}[] = [{},{},{},{},{},{}];

function ShoppingItems() {
  return (
    <div>
      <div className={styles.itemsContainer}> 
        {items.map((item) => (
          <ShoppingItem items={items} />
        ))}
      </div>
    </div>
  );
}

export default ShoppingItems;
