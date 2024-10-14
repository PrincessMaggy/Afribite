import { useContext,  useState } from "react";
import { FiImage } from "react-icons/fi";
import { displayContext } from "../context/display";
import ProfileDisplay from "../components/ProfileDisplay";

const Profile = () => {
    const [profileForm, setProfileForm] = useState({name: '', restuarantName: '', email: '', phoneNo:'', address:''})
    const {showProfile, setShowProfile} = useContext(displayContext)

  const handleChange = (e) => {
    const {name, value} = e.target
    setProfileForm((prev)=>(
      {...prev,
        [name]: value
      }
    ))
  }


  return (
    <div className="w-[90%] m-auto p-6 lg:px-32 lg:py-16 bg-n-n6 rounded-lg shadow-md overflow-hidden">

      <div className={`bg-white px-10 p-4 mb-4 ${ showProfile ? '' : 'hidden'}`}>
        <ProfileDisplay/>
      </div>

      {/* Edit Profile form */}
      <form action="" className={`sm:mt-8 w-full`}>
          <div className={`${ showProfile ? 'hidden' : ''} my-4`}>
          <h1 className="font-semibold sm:text-2xl text-[#E2725B] text-center">
          Edit Profile
           </h1>

           <p className="mt-4 font-semibold text-[#E2725B] ">Add Profile Picture</p>
           <div className="flex items-end mt-2 ">
              <div className="w-36 h-36 flex items-center p-4 bg-white justify-center border-2 rounded-full">
                  <FiImage className="text-5xl text-n-n3" />
              </div>

             
              <label
                htmlFor="file"
                className="rounded-f inline-block box-border border-2 pointer bg-p-button p-3 rounded-md text-n-n7 text-xs lg:text-sm font-pop hover:text-p-button hover:bg-n-n7 "
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

        <div className="flex justify-end items-center mt-4 gap-5">
        <p onClick={() => setShowProfile(true)} className="text-[#808000] hover:text-[#3d3d16] font-semibold">Save</p>
        <p onClick={() => setShowProfile(true)} className="text-[#E2725B] hover:text-[#ae4c38] font-semibold">Cancel</p>
        </div>
          </div>
      </form>
    </div>
  )
}

export default Profile
