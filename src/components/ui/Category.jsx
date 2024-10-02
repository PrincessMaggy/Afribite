import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
const Category = () => {
    const [category, setCategory] = useState('');

    const options = [
        "Main Dish",
        "Appetizer",
        "Side",
        "Soup",
        "Salad",
        "Special",
        "Beverage",
        "Dessert"
    ];

    return (
<div className="relative">
    <label htmlFor="category" className="block mb-2 font-semibold text-[#E2725B]">
        Category
    </label>
    <div className="relative">
        <select
            id="category"
            className="w-full p-2 pr-10 border-2 bg-inherit border-[#E2725B]/20 rounded-lg focus:outline-none focus:border-[#E2725B] appearance-none"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
        >
            <option className="text-base font-semibold text-[#E2725B]" value="">Select a category</option>
            {options.map((option, index) => (
              
                <option className="text-base font-semibold text-[#E2725B]" key={index} value={option}>
                    {option}
                </option>
              
            ))}
        </select>
        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#E2725B]">
            <FaChevronDown />
        </span>
    </div>
</div>

    );
}

export default Category;