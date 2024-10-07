import { useState, useRef } from "react";
import Button from "../components/button";
import { MdDeleteOutline } from "react-icons/md";
import { addDoc, collection } from "@firebase/firestore";
import { db } from "../firebase";

function MenuForm() {
  // Initial image placeholder
  const initialImage = "/src/assets/imagePlaceHolder.svg";

  // Form states
  const [image, setImage] = useState(initialImage);
  const [dishName, setDishName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [items, setItems] = useState([]);

  const fileInputRef = useRef(null); // Reference to the file input instance

  const maxDishNamechar = 100; // Maximum name

  // Handle image click
  const handleImageClick = () => {
    fileInputRef.current.click(); // Trigger the file input
  };

  // Handle image change
  const handleImageChange = (event) => {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      const render = new FileReader(); // Read the file contents from the filesystem
      render.onload = () => {
        setImage(render.result); // Convert the image file to upload file
      };
      render.readAsDataURL(file); // Convert the file to Data URL
    }
  };

  // Validate form fields
  const validateForm = () => {
    let errors = {};

    // Check if the image is still the placeholder (validate if an actual image is uploaded)
    if (image === "/src/assets/imagePlaceHolder.svg") {
      errors.image = "Image is required.";
    }

    // Dish name validation (non-empty and trimmed)
    if (!dishName.trim()) {
      errors.dishName = "Dish name is required.";
    }

    // Price validation (non-empty, trimmed, valid number and greater than zero)
    if (!price.trim()) {
      errors.price = "Price is required.";
    } else if (isNaN(price) || parseFloat(price) <= 0) {
      errors.price = "Please enter a valid price greater than zero.";
    }

    // Category validation (non-empty)
    if (!category) {
      errors.category = "Category is required.";
    }

    // Description validation (non-empty and trimmed)
    if (!description.trim()) {
      errors.description = "Description is required.";
    }

    return errors;
  };

  // Save and clear the form
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      // Set the form errors state with validation errors
      setFormErrors(errors);
      return; // Exit early if there are validation errors
    }

    // If no errors, add the new item to Firestore
    const newItem = {
      image,
      dishName,
      price,
      category,
      description,
    };

    // Add to Firestore
    addDoc(collection(db, "menuItems"), newItem)
      .then(() => {
        // Successfully added
        setItems([...items, newItem]);

        // Clear form fields after successful save
        setImage(initialImage);
        setDishName("");
        setPrice("");
        setCategory("");
        setDescription("");
        setFormErrors({}); // Clear previous errors
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  // Handle cancel button click (reset form fields)
  const handleCancel = () => {
    setImage(initialImage); // Reset image to the initial placeholder
    setDishName(""); // Reset dish name input
    setPrice(""); // Reset price input
    setCategory(""); // Reset category input
    setDescription(""); // Reset description input
    setFormErrors({}); // Clear errors
  };

  return (
    <div className="">
      <div className="my-12 mx-auto  lg:mx-auto w-[90%] lg:w-[48rem] bg-n-n6  rounded-sm grid place-items-center shadow-md">
        <div className="w-full flex justify-end mt-6 mb-3 lg:mt-10 px-4 lg:px-10">
          <MdDeleteOutline className="text-p-button text-2xl lg:text-4xl" />
        </div>
        <div className=" px-4 lg:px-10">
          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col justify-between items-center lg:flex-row gap-8"
          >
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
              {formErrors.image && (
                <p className="text-red-500 text-sm">{formErrors.image}</p>
              )}
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
                />
                <span className="text-n-n3 text-sm lg:ml-10">
                  {dishName.length}/{maxDishNamechar}
                </span>
                {formErrors.dishName && (
                  <p className="text-red-500 text-sm">{formErrors.dishName}</p>
                )}
              </div>

              {/* Price */}
              <div className="inline-block w-full lg:mr-4 mb-4 border border-n-n3 rounded-md focus:ring-0">
                <input
                  type="number"
                  placeholder="Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-[80%] lg:w-[80%] h-11 p-3 bg-transparent outline-none text-sm font-light"
                />
                <span className="text-n-n3 text-sm ml-6 lg:ml-16">$</span>
                {formErrors.price && (
                  <p className="text-red-500 text-sm">{formErrors.price}</p>
                )}
              </div>

              {/* Category */}
              <div>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full h-11 p-3 bg-transparent rounded-md mb-4 border border-n-n3 outline-none focus:ring-0 text-sm font-light text-n-n3"
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
                {formErrors.category && (
                  <p className="text-red-500 text-sm">{formErrors.category}</p>
                )}
              </div>

              {/* Description */}
              <div>
                <textarea
                  placeholder="Description"
                  value={description}
                  rows="4"
                  cols="5"
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full p-3 bg-transparent rounded-md mb-4 border border-n-n3 outline-none focus:ring-0 text-sm font-light resize-none"
                />
                {formErrors.description && (
                  <p className="text-red-500 text-sm">
                    {formErrors.description}
                  </p>
                )}
              </div>
            </div>
          </form>
        </div>
        <div className="w-full flex justify-end px-10">
          {/* Cancel Button */}
          <Button
            onClick={handleCancel}
            className="bg-transparent text-p-button3 px-5 py-1 border-none hover:bg-p-button hover:text-n-n8"
            text="Cancel"
          />

          {/* Save Button */}
          <Button
            type="submit"
            className="bg-transparent text-p-button3 px-5 py-1 border-none hover:text-n-n8 hover:bg-p-button"
            text="Save"
            to="/Adminhome/MainDish"
          />
        </div>

        {/* Add new button */}
        <div className="w-full justify-start mt-12">
          <Button
            text="Add new menu +"
            className="py-2 px-5 lg:px-10"
            to="/Adminhome/MenuForm"
          />
        </div>
      </div>
    </div>
  );
}

export default MenuForm;
