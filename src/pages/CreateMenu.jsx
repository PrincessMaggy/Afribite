import React from "react";
import menuIcon from "../assets/menuIcon.svg";
import Button from "../components/button";

function CreateMenu() {
  return (
    <div className="flex ">
      <div className="my-36 mx-auto lg:my-52 lg:mx-auto w-[90%] lg:w-[40rem] lg:h-[18rem] bg-n-n6 p-6 lg:p-10 rounded-sm grid place-items-center shadow-md">
        <img src={menuIcon} className="size-14 lg:size-24" alt="menu icon" />
        <h2 className="mt-2">Menu</h2>
        <p className="text-center mt-1 mb-3">
          Create menu to organize and display food and drinks on your point of
          sale.
        </p>
        <Button text="Create Menu" className="mt-2" />
      </div>
    </div>
  );
}

export default CreateMenu;
