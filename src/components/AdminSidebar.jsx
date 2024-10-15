import { PiCirclesFourFill } from "react-icons/pi";
import { BiCube } from "react-icons/bi";
import { FiOctagon } from "react-icons/fi";
import { HiOutlineSquaresPlus } from "react-icons/hi2";
import { MdLogout } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaRegWindowClose } from "react-icons/fa";
import { useContext } from "react";
import { displayContext } from "../context/display";
import { useAuth } from "../context/AuthenticationContext";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const AdminSidebar = () => {
  const { visible, setVisible } = useContext(displayContext);
  const [menuEmpty, setMenu] = useState(true);
  const { logOut } = useAuth();

  useEffect(() => {
    const db = getFirestore();
    const auth = getAuth();

    const checkUserDocument = async (user) => {
      console.log("Authenticated user:", user);
      try {
        console.log(user.uid);

        // Reference to the user's document in Firestore
        const userRef = doc(db, "menu", user.uid);

        console.log("Document path:", userRef.path);

        // Get the document snapshot
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          console.log("Document data:", userSnap.data());
          setMenu(false); // Menu exists
        } else {
          console.log("Document does not exist");
          setMenu(true); // Document doesn't exist
        }

      } catch (error) {
        console.error("Error checking user document:", error);
      }
    };

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        checkUserDocument(user); // Call the async function if the user is logged in
      } else {
        setMenu(true); // No user is signed in
      }
    });

    // Cleanup the subscription on component unmount
    return () => unsubscribe();
  }, []);

  return (
    <div
      className={`h-lvh bg-[#E2725B] ${
        visible ? "w-3/4 flex flex-col gap-10" : "hidden"
      } text-white lg:grid grid-rows-5 p-10`}
    >
      <FaRegWindowClose
        onClick={() => setVisible(false)}
        className="absolute lg:hidden text-2xl top-8 left-2"
      />

      <div className="flex flex-col gap-2">
        <img src={logo} alt="" className="w-fit mx-auto" />
        <p
          className={`${
            visible ? "hidden" : ""
          } font-extrabold text-2xl lg:text-4xl text-white text-center`}
        >
          <Link onClick={() => setVisible(false)} to="/">
            <div
              onClick={logOut}
              className="flex items-end justify-center row-span-2 gap-2 mb-8"
            >
              <MdLogout className="sm:text-2xl" /> Log out
            </div>
          </Link>
        </p>
      </div>

      <div className="flex flex-col gap-3  lg:text-lg text-white/50 row-span-2 justify-end">
        <NavLink to="/Adminhome/Dashboard">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4  text-white font-bold"
          >
            <PiCirclesFourFill className="border rounded-full bg-white text-[#E2725B]" />{" "}
            Dashboard
          </div>
        </NavLink>
        <NavLink to="/Adminhome/Promotions">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 "
          >
            <BiCube />
            Promotions
          </div>
        </NavLink>
        <NavLink to="/Adminhome/Advert">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 "
          >
            <FiOctagon />
            Advertisement
          </div>
        </NavLink>
        <NavLink
          to={menuEmpty ? "/Adminhome/CreateMenu" : "/Adminhome/MainDish"}
        >
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 "
          >
            <HiOutlineSquaresPlus />
            Menu
          </div>
        </NavLink>
        <NavLink>
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 "
          >
            <BsCart />
            Orders
          </div>
        </NavLink>
        <NavLink to="/Adminhome/Notifications">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 "
          >
            <FaRegBell />
            Notifications
          </div>
        </NavLink>
      </div>

      <div
        className={` ${
          visible ? "flex-1" : ""
        } flex items-end justify-center row-span-2 gap-2 mb-8`}
      >
        <Link
          onClick={() => setVisible(false)}
          to="/"
          className="flex items-end justify-center row-span-2 gap-2 mb-8"
        >
          <MdLogout className="sm:text-2xl" /> Log out
        </Link>
      </div>
    </div>
  );
};

export default AdminSidebar;
