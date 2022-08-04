import React from "react";
import styles from "../styles/Home.module.css";
import Bottom from "./Bottom";
import Middle from "./Middle";
import Top from "./Top";

import mainImage from "../../public/mainImage.jpg";
import chair from "../../public/chair.jpg";
import amchair from "../../public/amchair.jpg";
import lamp from "../../public/lamp.jpg";
import sofa from "../../public/sofa.jpg";
import table from "../../public/table.jpg";

type StaticImageData = {
  src: string;
  height: number;
  width: number;
  placeholder?: string;
};

const items: { img: StaticImageData; src: string }[] = [
  { img: chair, src: "category/chair" },
  { img: lamp, src: "category/lamp" },
  { img: table, src: "category/table" },
  { img: amchair, src: "category/amchair" },
  { img: sofa, src: "category/sofa" },
  { img: chair, src: "category/chair" },
];
const hotsellers: StaticImageData[] = [chair, chair, chair, chair, chair];

function MainContent() {
  return (
    <div>
      <Top />
      <Middle items={items} mainImage={mainImage} />
      <Bottom title="hot sellers" hotsellers={hotsellers} />
    </div>
  );
}

export default MainContent;
