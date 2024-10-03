import React from "react";
import Menu from "../components/Menu";
import jollofRice from "../assets/jollofRice.svg";
import Button from "../components/button";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

function MainDish() {
  return (
    <div>
      <div className="my-6 mx-auto p-6 lg:mx-auto w-[90%] lg:w-[48rem] font-medium bg-n-n6 rounded-sm grid place-items-center shadow-md">
        <h2 className="mb-8">Main Dishs</h2>

        <div className="flex justify-center items-center">
          <div className="flex flex-wrap justify-center h-[500px] lg:h-[480px] overflow-y-scroll scrollbar-thin scrollbar-thumb-p-button scrollbar-track-thin scrollbar-track-n-n4 gap-4  ">
            <Menu image={jollofRice} dishName="Jellof Rice" price="$15" />
            <Menu image={jollofRice} dishName="Jellof Rice" price="$15" />
            <Menu image={jollofRice} dishName="Jellof Rice" price="$15" />
            <Menu image={jollofRice} dishName="Jellof Rice" price="$15" />
            <Menu image={jollofRice} dishName="Jellof Rice" price="$15" />
            <Menu image={jollofRice} dishName="Jellof Rice" price="$15" />
            <Menu image={jollofRice} dishName="Jellof Rice" price="$15" />
            <Menu image={jollofRice} dishName="Jellof Rice" price="$15" />
            <Menu image={jollofRice} dishName="Jellof Rice" price="$15" />
            <Menu image={jollofRice} dishName="Jellof Rice" price="$15" />
          </div>
          <div>
            <Link to="/">
              <IoIosArrowForward className="text-4xl text-p-button" />
            </Link>
          </div>
        </div>
        <div className="pt-6">
          <Button
            text="Create +"
            to="/Adminhome/MenuForm"
            className="mr-2 px-8 opacity-70"
          />
          <Button
            text="Edit"
            className="bg-p-button3 opacity-70 hover:border-p-button3 hover:text-p-button3 px-12"
          />
        </div>
      </div>
    </div>
  );
}

export default MainDish;
