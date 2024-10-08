import React from 'react';
import bg from '../assets/images/background.png';
import food from '../assets/images/home-food.png';
import bg2 from '../assets/images/bg2.png';

const Hero = () => {
  return (
    <section className="h-full">
      <div className="flex max-[640px]:flex-col lg:flex-row items-center">
        {/* Left Side Content */}
        <div className="lg:w-[503px] max-[640px]:text-center max-[640px]:items-center w-full flex flex-col justify-center items-start xl:pl-20 pl-8 mt-10 xl:mt-40">
          <h1 className="text-terra-cotta text-3xl lg:text-4xl font-bold">
            Discover people & places through food
          </h1>
          <p className="mt-4 text-base lg:text-lg w-full lg:w-[440px]">
            Join a community of foodies, explore local eats, and make every meal unforgettable.
          </p>
          <a href="#" className="mt-12 lg:mt-28 px-4 py-3 rounded-full text-white bg-terra-cotta hover:underline">
            Make your order now
          </a>
        </div>

        {/* Right Side Background Image */}
        <div
          className="hidden xl:flex z-[-1] w-1/2 items-center bg-right-top bg-no-repeat bg-contain absolute top-0 right-0 h-full"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <div className="relative">
            <img src={food} className="xl:h-[600px] xl:w-[600px] h-[600px] w-[600px]" alt="Food" />
          </div>
          <img src={bg2} className="h-[480px] w-[300px] absolute top-40 right-11 z-[-1]" alt="Background Design" />
        </div>
        <div className="xl:hidden max-[640px]:mt-7">
            <img src={food} className="h-[500] w-[500]" alt="Food" />
          </div>
      </div>
     
    </section>
  );
};

export default Hero;
