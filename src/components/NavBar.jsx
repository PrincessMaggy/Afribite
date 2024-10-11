import logo from '../assets/images/logo.png'
import search from '../assets/images/search.png'
import arrow_down from '../assets/images/arrow_down.png'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoSearch, IoClose } from 'react-icons/io5';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearchBar = () => {
    setIsSearchOpen(!isSearchOpen);
  };


  return (
    <nav className="py-8 px-6 bg-transparent laptop:px-20 laptop:pr-6 tablet:p-6 flex items-center justify-between flex-wrap font-pop">
      {/* Logo */}
      
      <div className="flex w-36 gap-3.5 items-center">
        <img src={logo} alt="Afribite Logo" />
        <p className="text-terra-cotta text-2xl font-extrabold">AFRIBITE</p>
      </div>

      {/* Hamburger Menu (Mobile) */}
      <div className="block md:hidden">
        <button onClick={toggleMobileMenu} className="text-terra-cotta focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        
      </div>

      {/* Links (Desktop and Mobile) */}
      <div className="hidden md:flex md:ml-16">
        <div className="flex gap-5">
          <NavLink to="/home" className="">Home</NavLink>
          <details>
            <summary className="list-none">Menu</summary>
          </details>
          <details>
            <summary className="list-none">Special</summary>
          </details>
          <a>Locations</a>
          <a>About Us</a>
        </div>
      </div>

      {/* User Actions (Login and Cart) */}
      <div className="hidden md:flex md:items-center  gap-5  ms-10">
        <NavLink to="/user-sign-up" className="bg-terra-cotta text-center justify-center flex items-center rounded-lg text-white w-[120px] h-10">
          Login/Sign Up
        </NavLink>
        <NavLink to="" className="gap-2">Cart</NavLink>
      </div>

      {/* Search Bar */}
      {/* <div className="relative hidden lg:hidden md:flex ms-11"> */}
      <div className={`relative hidden ${isSearchOpen ? 'tablet:flex': 'tablet:hidden'} laptop:flex items-center ms-11`}>
        <div className="absolute inset-y-0 left-0 flex justify-center items-center pl-3.5 pointer-events-none">
          <img src={search} alt="" />
        </div>
        <input
          type="text"
          id="input-group-1"
          className="bg-white text-base h-14 border-black border-3 w-[349px] text-black rounded-[100px] focus:ring-blue-500 focus:border-blue-500 block pl-10 p-px placeholder:text-black"
          placeholder="What would you like to eat?"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none">
          <img src={arrow_down} alt="" />
        </div>
      </div>
      <div className="laptop:hidden tablet:flex hidden items-center cursor-pointer">
        {isSearchOpen ? (
          <IoClose className="text-terra-cotta" size={24} onClick={toggleSearchBar} />
        ) : (
          <IoSearch className="text-terra-cotta" size={24} onClick={toggleSearchBar} />
        )}
      </div>
  

      {/* Mobile Menu Links (Hidden by default) */}
      <div className={`w-full ${isMobileMenuOpen ? 'absolute top-20 right-0 bg-white block' : 'hidden'} md:hidden text-center`} id="mobile-nav">
        <div className="flex flex-col mt-4">
          <a className="py-2">Home</a>
          <details>
            <summary className="py-2 list-none">Menu</summary>
          </details>
          <details>
            <summary className="py-2 list-none">Special</summary>
          </details>
          <a className="py-2">Locations</a>
          <a className="py-2">About Us</a>
          <NavLink to='/user-sign-up' className="bg-terra-cotta flex items-center justify-center text-center rounded-lg text-white w-full h-10 mt-4">
            Login/Sign Up
          </NavLink>
          <a className="py-2 mt-2">Cart</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
