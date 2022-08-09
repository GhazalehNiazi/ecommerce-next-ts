import React from "react";
import { useState } from "react";

function Size({ sizes, className }) {
  const [selected, setSelected] = useState("");
  const sizeClickHandler = () => {
    setSelected("selected");
  };

  return (
    <div className={className}>
      {sizes.map((i) => (
        <span onClick={sizeClickHandler} className={selected}>
          {i}
        </span>
      ))}
    </div>
  );
}

export default Size;