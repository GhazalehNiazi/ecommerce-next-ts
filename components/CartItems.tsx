import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import styles from '../styles/cart.module.css'
import { Product } from "./types";
import chair from "../public/chair.jpg";
function CartItems() {
  const selector = useSelector((state) => state.cart.cart);
  console.log(selector);
  return (
    <div className={styles.items}>
      {selector.map((item: Product) => (
        <div className={styles.item}>
          <div className={styles.columnOne}>
            <Image src={chair} width={150} height={150} />
            <div className={styles.name}>
              <h1>{item.name}</h1>
              <div className={styles.counter}>
                <h3>3x</h3>
                <div>
                  <button>+</button>
                  <button>-</button>
                </div>
              </div>
            </div>
          </div>
          <h1 className={styles.columnTwo}>{item.price}</h1>
        </div>
      ))}
    </div>
  );
}

export default CartItems;
