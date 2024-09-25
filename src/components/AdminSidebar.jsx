import { PiCirclesFourFill } from "react-icons/pi";
import { BiCube } from "react-icons/bi";
import { FiOctagon } from "react-icons/fi";
import { RiSettingsLine } from "react-icons/ri";
import { TbMessage } from "react-icons/tb";
import { PiInfoBold } from "react-icons/pi";
import { MdLogout } from "react-icons/md";

const AdminSidebar = () => {
  return (
    <div className="h-svh bg-[#E2725B] w-1/6  text-white grid grid-rows-2">
        <div className="flex flex-col justify-between items-center ">
            <p className="font-extrabold  text-4xl mt-8">AfriBite</p>
            <div className="flex flex-col gap-3 mt-32 text-lg text-white/50">
                <div className="flex items-center gap-4  text-white font-bold"> <PiCirclesFourFill className="border rounded-full bg-white text-[#E2725B]" /> Dashboard</div>
                <div className="flex items-center gap-4 "><BiCube/>Promotions</div>
                <div className="flex items-center gap-4 "> <FiOctagon />Advertisement</div>
                <div className="flex items-center gap-4 "><RiSettingsLine/>Settings</div>
                <div className="flex items-center gap-4 "><TbMessage />Messages</div>
                <div className="flex items-center gap-4 "><PiInfoBold />Support</div>
            </div>
        </div>

        <div className="mb-16 flex items-end justify-center">
            <div className="flex items-center gap-4 ">
            <MdLogout className="text-2xl" />Log out
            </div>
        </div>
    </div>
  )
}

export default AdminSidebar
