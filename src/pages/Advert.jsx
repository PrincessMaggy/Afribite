import Banner from "../components/Banner";
import Button from "../components/button";
import { FiImage } from "react-icons/fi";

const Advert = () => {
  return (
    <div className="w-[90%] m-auto p-6 lg:px-32 lg:py-16 rounded-lg grid place-items-center shadow-md bg-n-n6">
      <Banner
        text={"Boost Your Brand Visibility and Drive Sales with Advertisements"}
      />

      <form action="" className="mt-6 sm:mt-8 w-full">
        <h1 className="font-semibold sm:text-2xl text-[#E2725B] text-start">
          Create Ad
        </h1>

        <p className="mt-4 font-semibold text-[#E2725B]">Ad title</p>
        <input
          type="text"
          className="border-2 bg-inherit border-[#E2725B]/20 w-full p-2 rounded-lg focus:outline-none focus:border-[#E2725B] "
        />

        <p className="mt-4 font-semibold text-[#E2725B] ">Description</p>
        <textarea
          name=""
          id=""
          rows={5}
          className="border-2 bg-inherit border-[#E2725B]/20 w-full p-2 rounded-lg focus:outline-none focus:border-[#E2725B]"
        ></textarea>

        <p className="mt-4 font-semibold text-[#E2725B] ">Upload image</p>
        <div className="flex gap-4 items-center p-4 bg-white justify-center border-2 border-dashed">
          <FiImage className="text-5xl text-n-n3" />
          <p className="">
            Upload an image for your restaurant banner (GIF,JPG or PNG){" "}
          </p>
          <label
            htmlFor="file"
            className="inline-block box-border border-2 pointer bg-p-button p-3 rounded-md text-n-n7 text-xs lg:text-sm font-pop hover:text-p-button hover:bg-n-n7 "
          >
            Browse
          </label>
          <input
            id="file"
            type="file"
            accept="image/png, image/gif, image/jpeg"
            className="hidden"
          />
        </div>

        <Button text="Save and Exit" className="mt-4" />
      </form>
    </div>
  );
};

export default Advert;
