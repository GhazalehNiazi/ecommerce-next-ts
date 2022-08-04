import React from "react";
import Image from "next/image";
function ItemOrder({
  name,
  price,
  available,
  discount,
  category,
  image,
  width,
  height,
}: {
  name: string;
  price: number;
  available: boolean;
  discount: number;
  category: string;
  image: string;
  width: number;
  height: number;
}) {
  return (
    <div>
      <div>
        <Image src={image} width={width} height={height} />
      </div>
      <div>
        <h1>{name}</h1>
        <h2>{price}</h2>
      </div>
    </div>
  );
}

export default ItemOrder;
