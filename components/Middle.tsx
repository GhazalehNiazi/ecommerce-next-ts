import React from "react";
import Image from "next/image";
import mainImage from "../public/mainImage.jpg";
import styles from "../styles/Maincontent.module.css";
import chair from "../public/chair.jpg";
import amchair from "../public/amchair.jpg";
import lamp from "../public/lamp.jpg";
import sofa from "../public/sofa.jpg";
import table from "../public/table.jpg";

const images = [chair, lamp, table, amchair, sofa,chair];

function Middle() {
  return (
    <div className={styles.middle}>
      <div className={styles.heroSection}>
        <Image src={mainImage} height="200px" />
      </div>
      <div className={styles.images}>
        {images.map((image) => (
          <Image src={image} />
        ))}
      </div>
    </div>
  );
}

export default Middle;
