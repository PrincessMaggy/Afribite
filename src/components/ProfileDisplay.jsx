import { useContext, useEffect, useState } from "react";
import { Profile as profile } from '../components/data';
import Button from "../components/button";
import { Link, useLocation } from "react-router-dom";
import { displayContext } from "../context/display";

const ProfileDisplay = () => {
    const [myProfile, setMyProfile] = useState([])
    const {setShowProfile} = useContext(displayContext)
    const location = useLocation()

    useEffect(()=>{
        setMyProfile(profile
          .filter((items)=>items.userid === 'user1'))
      },[])
    
  return (
    <div>
      <h1 className="text-center text-2xl font-medium my-4 ">My Profile</h1>
          <div className="mb-8">
          <img src={myProfile[0]?.profileImg} alt="" className="m-auto h-[100px] w-[100px] rounded-[100%] bg-[#E2725B]" />
          <p className='text-center m-4'>{myProfile[0]?.name}</p>
          </div>
          <div className="flex flex-col gap-5 my-4">
            <div className="">
              <h2 className='font-medium text-lg'>Restaurant&#39;s Name</h2>
              <p className='mt-2'>{myProfile[0]?.RestaurantName}</p>
            </div>
            <div>
              <h2 className='font-medium text-lg'>Phone No</h2>
              <p className='mt-2'>{myProfile[0]?.phoneNo}</p>
            </div>
            <div>
              <h2 className='font-medium text-lg'>Email</h2>
              <p className='mt-2'>{myProfile[0]?.email}</p>
            </div>
            <div>
              <h2 className='font-medium text-lg'>Address</h2>
              <p className='mt-2'>{myProfile[0]?.address}</p>
            </div>
          </div>

          <div className={`flex justify-end items-center gap-5 font-semibold m-6 ${location.pathname === '/Adminhome/Dashboard' ? 'hidden': ''}`}>
            <Button onClick={() => setShowProfile(false)}  text='Edit profile' className='bg-p-button3 hover:border-p-button3 hover:text-p-button3'/>
            <Link to='/Adminhome/Dashboard'><p className="text-p-button">Exit</p></Link>
          </div>
    </div>
  )
}

export default ProfileDisplay
