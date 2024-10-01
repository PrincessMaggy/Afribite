import React from "react";

function Menu({ items }) {
  return (
    <div className="border-2 border-p-button px-8 pt-8">
      <img src={items.src} alt="image" />
      <p className="my-4">{items.text}</p>
      <div className="inline-block"></div>
    </div>
  );
}

export default Menu;
