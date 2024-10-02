import React from "react";
import menuIcon from "../assets/menuIcon.svg";
import { Link } from "react-router-dom";

function CreateMenu() {
  return (
    <div className="p-6 lg:p-12">
      <div className="my-24 mx-auto lg:my-24 lg:mx-auto w-full lg:w-[40rem] lg:h-[19rem] bg-n-n6 rounded-sm grid place-items-center shadow-md">
        <img
          src={menuIcon}
          className="size-14 lg:size-24 mt-8"
          alt="menu icon"
        />
        <h2 className="mt-2">Menu</h2>
        <p className="text-center mt-1 mb-3 px-2">
          Create menu to organize and display food and drinks on your point of
          sale.
        </p>
        <Link
          to="/Adminhome/MenuForm"
          className="bg-p-button p-3 mt-2 mb-8 rounded-md text-n-n7 text-xs lg:text-sm font-pop border-2 hover:border-p-button hover:text-p-button hover:bg-n-n7"
        >
          Create Now
        </Link>
      </div>
    </div>
  );
}

export default CreateMenu;
