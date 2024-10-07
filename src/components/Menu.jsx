import { useState } from "react";
import { MdToggleOff, MdToggleOn } from "react-icons/md"; // Combined import

function Menu(items) {
  // Fix the useState destructuring

  const [toggle, setToggle] = useState(false);

  return (
    <div className="border-2 border-p-button px-6 pt-6 rounded-lg flex-initial w-[12.5rem] cursor-pointer">
      <img src={items.image} alt="image" className="w-full h-auto" />
      <p className="mt-1.5 text-center">{items.dishName}</p>
      <div className="flex justify-around items-center my-1.5">
        <p>{items.price}</p>
        <button
          onClick={() => setToggle(!toggle)}
          className="flex items-center space-x-2"
        >
          {toggle ? (
            <MdToggleOff className="text-n-n3 text-2xl" />
          ) : (
            <MdToggleOn className="text-p-button3 text-2xl" />
          )}
          <span className="text-xs text-n-n2">
            {toggle ? "Unavailable" : "Available"}
          </span>
        </button>
      </div>
    </div>
  );
}

export default Menu;
