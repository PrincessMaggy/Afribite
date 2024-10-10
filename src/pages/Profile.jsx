import { useEffect, useState } from "react";
import { FiImage } from "react-icons/fi";
import { Profile as profile } from '../components/data';
import Button from "../components/button";

const Profile = () => {
    const [myProfile, setMyProfile] = useState([])
    const [profileForm, setProfileForm] = useState({name: '', restuarantName: '', email: '', phoneNo:'', address:''})
    const [show, setShow] = useState(false)

  const handleChange = (e) => {
    const {name, value} = e.target
    setProfileForm((prev)=>(
      {...prev,
        [name]: value
      }
    ))
  }

  useEffect(()=>{
    setMyProfile(profile
      .filter((items)=>items.userid === 'user1'))
  },[])


  return (
    <div className="w-[90%] m-auto p-6 lg:px-32 lg:py-16 bg-n-n6 rounded-lg shadow-md overflow-hidden">

      <div className={`bg-white px-10 p-4 mb-4 ${ show ? 'hidden' : ''}`}>
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
          <div onClick={() => setShow(true)} className="font-semibold sm:text-2xl text-[#E2725B] text-center my-6 ">
          <Button text='Setup profile'/>
        </div>
      
        </div>

      {/* Profile form */}
  
      <form action="" className={`sm:mt-8 w-full`}>
          <div className={`${ show ? '' : 'hidden'} my-4`}>
          <h1 className="font-semibold sm:text-2xl text-[#E2725B] text-center">
          Edit Profile
           </h1>

            <p className="mt-4 font-semibold text-[#E2725B]">Name</p>
            <input
            name="name"
            value={profileForm.name}
            onChange={handleChange}
            type="text" 
            className="border-2 bg-inherit border-[#E2725B]/20 w-full p-2 rounded-lg focus:outline-none focus:border-[#E2725B] "/>

            <p className="mt-4 font-semibold text-[#E2725B]">Reasutrant name</p>
            <input
            name="restuarantName"
            value={profileForm.restuarantName}
            onChange={handleChange}
            type="text" 
            className="border-2 bg-inherit border-[#E2725B]/20 w-full p-2 rounded-lg focus:outline-none focus:border-[#E2725B] "/>

            <p className="mt-4 font-semibold text-[#E2725B] ">Email</p>
            <input
            placeholder="" 
            name="email"
            value={profileForm.email}
            onChange={handleChange}
            id=""
            className="border-2 bg-inherit border-[#E2725B]/20 w-full p-2 rounded-lg focus:outline-none focus:border-[#E2725B] placeholder:text-[#E2725B]/40 placeholder:p-1"></input>

            <p className="mt-4 font-semibold text-[#E2725B] ">Phone Number</p>
            <input
            placeholder="" 
            name="phoneNo"
            type="Number"
            value={profileForm.phoneNo}
            onChange={handleChange}
            id=""
            className="border-2 bg-inherit border-[#E2725B]/20 w-full p-2 rounded-lg focus:outline-none focus:border-[#E2725B] placeholder:text-[#E2725B]/40 placeholder:p-1"></input>

          <p className="mt-4 font-semibold text-[#E2725B] ">Address</p>
            <input
            placeholder="" 
            name="address"
            value={profileForm.address}
            onChange={handleChange}
            id=""
            className="border-2 bg-inherit border-[#E2725B]/20 w-full p-2 rounded-lg focus:outline-none focus:border-[#E2725B] placeholder:text-[#E2725B]/40 placeholder:p-1"></input>



        <p className="mt-4 font-semibold text-[#E2725B] ">Add Profile Picture</p>
        <div className="flex gap-4 items-center p-4 bg-white justify-center border-2 border-dashed">
          <FiImage className="text-5xl text-n-n3" />
          <p className="">
            Upload an image (GIF,JPG or PNG){" "}
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
        <div className="flex justify-end items-center mt-4 gap-5">
        <p onClick={() => setShow(false)} className="text-[#808000] sm:text-xl hover:text-[#3d3d16] font-semibold">Save</p>
        <p onClick={() => setShow(false)} className="text-[#E2725B] sm:text-xl hover:text-[#ae4c38] font-semibold">Cancel</p>
        </div>
          </div>
      </form>
    </div>
  )
}

export default Profile
