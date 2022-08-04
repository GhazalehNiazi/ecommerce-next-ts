import React from "react";
import Image from "next/image";
import Header from "../components/Header";
import Button from "../components/Button";
import styles from "../styles/item.module.css";

function item() {
  return (
    <div className={styles.itemContainer}>
      <Header />
      <div className={styles.item}>
        <Image src="/" width={600} height={600} />
        <div className={styles.order}>
          <div>
            <h1>name</h1>
            <h3>price</h3>
          </div>
          <div>
            <h3>Color</h3>
          </div>
          <div>
            <h3>size</h3>
          </div>
          <Button>Add To Cart</Button>
        </div>
      </div>
    </div>
  );
}

export default item;
