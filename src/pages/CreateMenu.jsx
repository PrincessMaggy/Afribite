import menuIcon from "../assets/menuIcon.svg";
import Button from "../components/button";

function CreateMenu() {
  return (
    <div className="p-6 lg:p-12">
      <div className="my-24 mx-auto lg:my-24 lg:mx-auto w-full lg:w-[40rem] lg:h-[19rem] bg-n-n6 rounded-sm grid place-items-center shadow-md">
        <img
          src={menuIcon}
          className="size-14 lg:size-24 mt-8"
          alt="menu icon"
        />
        <h2 className="mt-2">Menu</h2>
        <p className="text-center mt-1 mb-3 px-2">
          Create menu to organize and display food and drinks on your point of
          sale.
        </p>
        <Button
          to="/Adminhome/MenuForm"
          text="Create Now"
          className="p-3 mt-2 mb-8"
        />
      </div>
    </div>
  );
}

export default CreateMenu;
