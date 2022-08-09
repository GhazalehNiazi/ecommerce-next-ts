import React from "react";
import CartDetail from "../../components/CartDetails";
import CartItems from "../../components/CartItems";
import Header from "../../components/Header";
import styles from '../../styles/cart.module.css'
function cart() {
  return (
    <div>
      <Header />
      <div className={styles.cart}>
        <CartItems />
        <CartDetail />
      </div>
    </div>
  );
}

export default cart;
