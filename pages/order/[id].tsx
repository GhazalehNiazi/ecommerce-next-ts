import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import Color from "../../components/Color";
import Size from "../../components/Size";
import styles from "../../styles/order.module.css";
import { actionTypes } from "../../store/actionTypes";
import Header from "../../components/Header";
function id() {
  const router = useRouter();
  const { id } = router.query;

  const allProducts = useSelector((state) => state.allProducts.products);
  console.log(allProducts);

  const product = allProducts.find((item) => item.id == id);
  console.log(product);

  const [addedToCart , setAddedToCart] = useState(false)
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch({
      type: actionTypes.ADD_PRODUCT,
      payload: product,
    });
    setAddedToCart(true)

  };
  return (
    <div className={styles.order}>
      <Header />
    <div className={styles.mainContentOrder}>
      <Image src={product.img} height={800} width={800} />
      <div className={styles.details}>
        <div className={styles[`details-firstSection`]}>
          <div className={styles[`details-name`]}>{product.name}</div>
          <div className={styles[`details-price`]}>${product.price}</div>
        </div>
        <div>
          <div className="details-title">color</div>
          <Color colors={product.colors} />
        </div>
        {product.size && (
          <div>
            <div className={styles[`details-title`]}>size</div>
            <Size className={styles[`detail-size`]} sizes={product.size} />
          </div>
        )}
        <button  onClick={addToCartHandler}>
          Add To Bag
        </button>
      </div>
        {addedToCart && <div className={styles.addedToCart}>added to cart</div>}
    </div>
    </div>
  );
}

export default id;
