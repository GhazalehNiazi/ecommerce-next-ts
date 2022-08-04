import React from "react";
import styles from "../../styles/Maincontent.module.css";

import Image from "next/image";

type StaticImageData = {
  src: string;
  height: number;
  width: number;
  placeholder?: string;
};

function Bottom({ hotsellers ,title}: { hotsellers: StaticImageData[] ,title:string}) {
  return (
    <div>
      <div className={styles.bottomtitle}>
        <h1>{title.toLocaleUpperCase()}</h1>
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
