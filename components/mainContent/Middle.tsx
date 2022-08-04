import React from "react";
import Image from "next/image";
import styles from "../../styles/Maincontent.module.css";
import Link from "next/link";

type StaticImageData = {
  src: string;
  height: number;
  width: number;
  placeholder?: string;
};

function Middle({
  items,
  mainImage,
}: {
  items: { img: StaticImageData; src: string }[];
  mainImage: StaticImageData;
}) {
  return (
    <div className={styles.middle}>
      <div className={styles.heroSection}>
        <Link href="/">
          <Image src={mainImage} height="200px" />
        </Link>
      </div>
      <div className={styles.images}>
        {items.map((item) => (
          <Link href={item.src}>
            <Image src={item.img} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Middle;
