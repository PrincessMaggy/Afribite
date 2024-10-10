import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { IoClose } from 'react-icons/io5';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import person from '../assets/images/person.png';
import mail from '../assets/images/mail.png';
import category from '../assets/images/category.png';
import lock from '../assets/images/lock.png';
import Carousel from '../assets/images/Carousel.png'
import logo from '../assets/images/logo.png';

const UserSignUp = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        category: '',
        password: '',
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Perform sign up logic here
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="flex flex-col md:flex-row font-pop">
            {/* Image section */}
            <div className="relative hidden md:block tablet:w-1/2 lg:w-2/5">
                <img src={Carousel} className="rounded-r-[20px] w-full h-full object-cover" alt="Carousel" />
                <div className="absolute text-white inset-x-0 bottom-0 ps-5 pb-7">
                    <h2 className="font-semibold text-2xl pr-28 leading-9">
                        Food that warms the heart, memories that last.
                    </h2>
                    <p className="leading-6 text-base">Gather, eat, and make moments unforgettable.</p>
                </div>
            </div>

            {/* Form section */}
            <section className="flex flex-col items-center justify-center w-full md:w-1/2 lg:w-3/5 p-6">
                <div className="w-full max-w-md">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3.5">
                            <img src={logo} alt="Afribite Logo" className="w-10" />
                            <p className="text-terra-cotta text-2xl font-extrabold">AFRIBITE</p>
                        </div>
                        <IoClose className="text-black cursor-pointer text-2xl" onClick={() => navigate('/')} />
                    </div>

                    <h2 className="font-semibold text-2xl leading-9 mt-10 mb-2">Glad to have you onboard!</h2>
                    <p className="text-base leading-6 mb-10">Sign up to have an account with us.</p>

                    <form onSubmit={handleSubmit} className="bg-white w-full">
                        {/* Full Name */}
                        <div className="mb-2">
                            <label className="block text-black text-base leading-6 font-bold mb-0.5" htmlFor="fullName">
                                Full Name
                            </label>
                            <div className="flex items-center border-[1px] border-[#DFDFBF] rounded-[10px] p-3">
                                <img src={person} alt="Person Icon" className="mr-2.5" />
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    placeholder="Enter fullname"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="w-full focus:outline-none"
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div className="mb-2">
                            <label className="block text-black text-base leading-6 font-bold mb-0.5" htmlFor="email">
                                Email
                            </label>
                            <div className="flex items-center border-[1px] border-[#DFDFBF] rounded-[10px] p-3">
                                <img src={mail} alt="Mail Icon" className="mr-2.5" />
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Enter valid email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full focus:outline-none"
                                />
                            </div>
                        </div>

                        {/* Category */}
                        <div className="mb-2">
                            <label className="block text-black text-base leading-6 font-bold mb-0.5" htmlFor="category">
                                Category
                            </label>
                            <div className="flex items-center border-[1px] border-[#DFDFBF] rounded-[10px] p-3">
                                <img src={category} alt="Category Icon" className="mr-2.5" />
                                <select
                                    id="category"
                                    name="category"
                                    value={formData.category}
                                    onChange={handleChange}
                                    className="w-full focus:outline-none"
                                >
                                    <option value="">Select your category</option>
                                    <option value="restaurant-owner">Restaurant Owner</option>
                                    <option value="food-lover">Food Lover</option>
                                </select>
                            </div>
                        </div>

                        {/* Password */}
                        <div className="mb-10">
                            <label className="block text-black text-base leading-6 font-bold mb-0.5" htmlFor="password">
                                Password
                            </label>
                            <div className="flex items-center border-[1px] border-[#DFDFBF] rounded-[10px] p-3">
                                <img src={lock} alt="Lock Icon" className="mr-2.5" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="w-full focus:outline-none"
                                />
                                <button type="button" onClick={togglePasswordVisibility} className="focus:outline-none">
                                    {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                                </button>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full text-base leading-6 bg-terra-cotta hover:bg-orange-950 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
                        >
                            Sign up
                        </button>
                    </form>

                    <p className="text-sm text-gray-500 text-center leading-5 mt-6">- or continue with -</p>
                    <button className="w-full border-[1px] rounded-[10px] p-3 border-[#808000] mt-6 flex justify-center items-center gap-3 hover:bg-yellow-300">
                        <FcGoogle /> Sign up with Google
                    </button>

                    <p className="w-full mt-9 text-center text-sm leading-5">
                        Already have an account? <Link to="/login" className="text-terra-cotta font-bold">Login</Link>
                    </p>
                </div>
            </section>
        </div>
    );
};

export default UserSignUp;
