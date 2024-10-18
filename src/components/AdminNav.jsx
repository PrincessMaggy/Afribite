import { Link, useLocation } from "react-router-dom"
import { useEffect } from "react";
import { useContext } from "react";
import { displayContext } from "../context/display";
import { BiMenuAltLeft } from "react-icons/bi";
import { profileContext } from "../context/ProfileContext";
import profileImg from '../assets/profile.png'


const AdminNav = ({className}) => {
    const {myProfile} = useContext(profileContext)
    const { setVisible } = useContext(displayContext);
    const location = useLocation()

    useEffect(()=>{
      
      },[])

  return (
    <div className={`flex m-auto mb-4 items-center justify-between lg:justify-end ${className}`}>
     <BiMenuAltLeft
        onClick={() => setVisible(true)}
        className="lg:hidden text-5xl text-[#E2725B]"
      />

      <div className={`flex gap-2 ${location.pathname === '/Adminhome/Profile' ? 'hidden' : ''}` }>
        <Link to='/Adminhome/Profile'><img src={myProfile?.profileImage ? myProfile?.profileImage : profileImg} alt="" className="m-auto h-[50px] w-[50px] rounded-[100%] bg-[#E2725B]" />
        </Link>
          <div className="flex flex-col">
            <p className='text-base hidden md:block'>{myProfile?.restuarantName}</p>
            <p className='text-xs hidden md:block'>{myProfile?.name}</p>
          </div>
        </div>
    </div>
  )
}

export default AdminNav
