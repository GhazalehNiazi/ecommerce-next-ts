import React from "react";
import styles from "../styles/Maincontent.module.css";
import chair from "../public/chair.jpg";
import Image from "next/image";
const hotsellers = [chair, chair, chair, chair,chair];

function Bottom() {
  return (
    <div>
      <div className={styles.bottomtitle}>
        <h1>hot sellers</h1>
        <h1>search</h1>
      </div>
      <div className={styles.bottomImageContainer}>
        {hotsellers.map((hotseller) => (
          <Image src={hotseller} height={240} width={450} />
        ))}
      </div>
    </div>
  );
}

export default Bottom;
