import { PiCirclesFourFill } from "react-icons/pi";
import { BiCube } from "react-icons/bi";
import { FiOctagon } from "react-icons/fi";
import { HiOutlineSquaresPlus } from "react-icons/hi2";
import { MdLogout } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import { NavLink, Link} from 'react-router-dom'
import logo from '../assets/logo.png'

const AdminSidebar = () => {
  return (
    <div className="h-dvh bg-[#E2725B] sm:w-1/6  text-white grid grid-rows-2">
        <div className="flex flex-col justify-between items-center ">
          <div className="flex flex-col mt-8">
          <img src={logo} alt="" className="w-fit m-auto" />
          <p className="font-extrabold text-2xl sm:text-4xl mt-2 ">AfriBite</p>
          </div>
            <div className="flex flex-col gap-3 mt-16 sm:mt-32 sm:text-lg text-white/50">
            <Link  to='/Dashboard'>
              <div className="flex items-center gap-4  text-white font-bold">
                  <PiCirclesFourFill className="border rounded-full bg-white text-[#E2725B]" /> Dashboard
              </div>
            </Link>
            <NavLink>
              <div className="flex items-center gap-4 "><BiCube/>Promotions</div>
            </NavLink>
            <NavLink to='/Advert'>
              <div className="flex items-center gap-4 "> <FiOctagon />Advertisement</div>
            </NavLink>
            <NavLink>
              <div className="flex items-center gap-4 "><HiOutlineSquaresPlus />Menu</div>
            </NavLink>
            <NavLink>
              <div className="flex items-center gap-4 "><BsCart />Orders</div>
            </NavLink>
            <NavLink>
            <div className="flex items-center gap-4 "><FaRegBell />Notification</div>
            </NavLink>
            </div>
        </div>

        <div className="mb-16 flex items-end justify-center">
            <div className="flex items-center gap-4 ">
            <MdLogout className="sm:text-2xl" />Log out
            </div>
        </div>
    </div>
  )
}

export default AdminSidebar
