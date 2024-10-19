import { useState } from "react";
import { MdToggleOff, MdToggleOn } from "react-icons/md"; // Combined import
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Menu(items) {
  // Fix the useState destructuring

  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  const formatCurrency = (num) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0, // Change this if you want decimals
    }).format(num);
  };

  return (
    <div className="border-2 border-p-button px-6 pt-6 rounded-lg flex-initial w-[12.5rem] cursor-pointer">
      <img src={items.image} alt="image" className="w-full h-32 rounded-md" />
      <p className="mt-1.5 text-center">{items.dishName}</p>
      <div className="flex justify-around items-center my-1.5 ">
        <p>{formatCurrency(items.price)}</p>
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

      <FaEdit
        type="button"
        onClick={() => {
          navigate("/Adminhome/EditMenu", {
            state: {
              img: items.image,
              dish: items.dishName,
              prc: items.price,
              index: items.index,
              desc: items.description,
              cat: items.category,
            },
          });
        }}
        className="text-p-button3 text-xl mb-2 hover:text-p-button3 hover:opacity-70"
      />
    </div>
  );
}

export default Menu;
