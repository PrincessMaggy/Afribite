import Menu from "../components/Menu";
import moimoi from "../assets/moimoi.svg";
import Button from "../components/button";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

function Side() {
  return (
    <div>
      <div className="my-4 mx-auto py-6 lg:p-6 lg:mx-auto w-[90%] md:w-[30rem] lg:w-[48rem] font-medium bg-n-n6 rounded-sm grid place-items-center shadow-md">
        <h2 className="mb-8">Side</h2>

        <div className="flex justify-between items-center">
          <div>
            <Link to="/Adminhome/Appetizer">
              <IoIosArrowBack className="text-3xl lg:text-4xl text-p-button my-4" />
            </Link>
          </div>
          <div className="flex flex-wrap justify-center items-center h-[480px] overflow-y-scroll scrollbar-thin scrollbar-thumb-p-button scrollbar-track-thin scrollbar-track-n-n4 gap-4">
            <Menu image={moimoi} dishName="Moi Moi" price="$15" />
            <Menu image={moimoi} dishName="Moi Moi" price="$15" />
            <Menu image={moimoi} dishName="Moi Moi" price="$15" />
            <Menu image={moimoi} dishName="Moi Moi" price="$15" />
            <Menu image={moimoi} dishName="Moi Moi" price="$15" />
            <Menu image={moimoi} dishName="Moi Moi" price="$15" />
            <Menu image={moimoi} dishName="Moi Moi" price="$15" />
            <Menu image={moimoi} dishName="Moi Moi" price="$15" />
            <Menu image={moimoi} dishName="Moi Moi" price="$15" />
            <Menu image={moimoi} dishName="Moi Moi" price="$15" />
          </div>
          <div>
            <Link to="/Adminhome/Soup">
              <IoIosArrowForward className="text-3xl lg:text-4xl text-p-button my-4" />
            </Link>
          </div>
        </div>
        <div className=" flex px-2 pt-6">
          <Button
            text="Create +"
            to="/Adminhome/MenuForm"
            className="mr-2 opacity-70 px-4 lg:px-8"
          />
          <Button
            text="Edit"
            className="bg-p-button3 opacity-70 hover:border-p-button3 hover:text-p-button3 px-8 lg:px-10 lg:mr-6"
          />
        </div>
      </div>
    </div>
  );
}

export default Side;
