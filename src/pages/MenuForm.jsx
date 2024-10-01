import React, { useState, useRef } from "react";
import Button from "../components/button";
import { Link } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";

function MenuForm() {
  // Initial image placeholder
  const initialImage = "/src/assets/imagePlaceHolder.svg";

  // Form states
  const [image, setImage] = useState(initialImage);
  const [dishName, setDishName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const fileInputRef = useRef(null); // Reference to the file input instance of the current state change event

  const maxDishNamechar = 100; // Maximum name

  // Handle image click
  const handleImageClick = () => {
    fileInputRef.current.click(); // Trigger the file input
  };

  // Handle image change
  const handleImageChange = (event) => {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      const render = new FileReader(); // Read the file contents from the filesystem and convert it to a string
      render.onload = () => {
        setImage(render.result); // Convert the image file to upload file
      };
      render.readAsDataURL(file); // Convert the file as data URL
    }
  };

  // Handle cancel button click (reset form fields)
  const handleCancel = () => {
    setImage(initialImage); // Reset image to the initial placeholder
    setDishName(""); // Reset dish name input
    setPrice(""); // Reset price input
    setCategory(""); // Reset category input
    setDescription(""); // Reset description input
  };

  return (
    <div className="">
      <div className="my-12 mx-auto  lg:mx-auto w-[90%] lg:w-[48rem] bg-n-n6  rounded-sm grid place-items-center shadow-md">
        <div className="w-full flex justify-end mt-6 mb-3 lg:mt-10 px-4 lg:px-10">
          <MdDeleteOutline className="text-p-button text-2xl lg:text-4xl" />
        </div>
        <div className="flex flex-col justify-between items-center lg:flex-row gap-8 px-4 lg:px-10">
          <div className="lg:ml-12 Lg:w-[30%]">
            {/* Hidden File Input */}
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageChange}
              className="hidden lg:hidden"
              accept="image/*" // Only allow image files
            />

            {/* Clickable Image */}
            <img
              src={image} // Placeholder image or default image
              alt=""
              className="cursor-pointer w-36 lg:w-40 h-32 lg:h-36 rounded-xl object-cover border-gray-300"
              onClick={handleImageClick}
            />
          </div>
          <div className="lg:w-[70%]">
            {/* Dish Name */}
            <div className="inline-block w-full lg:mr-4 mb-4 border border-n-n3 rounded-md focus:ring-0">
              <input
                type="text"
                placeholder="Dish Name"
                value={dishName}
                onChange={(e) => setDishName(e.target.value)}
                className="w-[80%] lg:w-[80%] h-11 p-3 bg-transparent outline-none text-sm font-light"
                maxLength={maxDishNamechar}
                required
              />
              <span className="text-n-n3 text-sm lg:ml-10">
                {dishName.length}/{maxDishNamechar}
              </span>
            </div>

            {/* Price */}
            <div className="inline-block w-full lg:mr-4 mb-4 border border-n-n3 rounded-md focus:ring-0">
              <input
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-[80%] lg:w-[80%] h-11 p-3 bg-transparent outline-none text-sm font-light"
                required
              />
              <span className="text-n-n3 text-sm ml-6 lg:ml-16">$</span>
            </div>

            {/* Category */}
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full  h-11 p-3 bg-transparent rounded-md mb-4 border border-n-n3 outline-none focus:ring-0 text-sm font-light text-n-n3"
              required
            >
              <option value="">Category</option>
              <option value="Main Dish">Main Dish</option>
              <option value="Appetizer">Appetizer</option>
              <option value="Side">Side</option>
              <option value="Soup">Soup</option>
              <option value="Salad">Salad</option>
              <option value="Special">Special</option>
              <option value="Beverage">Beverage</option>
              <option value="Dessert">Dessert</option>
            </select>

            {/* Description */}
            <textarea
              placeholder="Description"
              value={description}
              rows="4"
              cols="5"
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-3 bg-transparent rounded-md mb-4 border border-n-n3 outline-none focus:ring-0 text-sm font-light"
              required
            />
          </div>
        </div>

        <div className="w-full flex justify-end px-6">
          {/* Cancel Button */}
          <Button
            onClick={handleCancel} // Call the handleCancel function when clicked
            className="bg-transparent text-p-button3 px-5 py-1 border-none hover:bg-p-button hover:text-n-n7"
            text="Cancel"
          />

          {/* Save Button */}
          <Link
            to="/"
            className="bg-transparent text-p-button3 px-5 py-1 hover:text-n-n7 hover:bg-p-button rounded-md ml-2 lg:mr-3.5 text-xs lg:text-sm"
          >
            Save
          </Link>
        </div>

        {/* Add new button */}
        <div className="w-full justify-start mt-12">
          <Button text="Add new menu +" className="py-2 px-5 lg:px-10" />
        </div>
      </div>
    </div>
  );
}

export default MenuForm;
