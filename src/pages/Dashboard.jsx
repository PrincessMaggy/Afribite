import bannerImage from '../assets/image.png'
import profile from '../assets/profile.png'
import dishIcon from '../assets/dishicon.png'
import vector from '../assets/Vector.png'
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDropdown } from "react-icons/io";

const Dashboard = () => {
  return (
    <div className="">
      <div className='flex w-full mb-8 items-center'>
        {/* Search */}
        <div className='relative flex flex-1 justify-center items-center'>
          <CiSearch className='-m-10 text-2xl text-n-n3'/>
          <input type="text" className="w-3/4 bg-inherit border border-[#E2725B]/20 focus:outline-none focus:border-[#E2725B] px-12 p-3 rounded-3xl " placeholder='search'/>
        </div>

        {/* Profile icon */}
        <div className='flex gap-2'>
          <img src={profile} alt="" className="m-auto h-[50px] w-[50px] rounded-[100%] bg-[#E2725B]" />
          <div className="flex flex-col">
            <p className='text-base hidden md:block'>Emmanuella 1234</p>
            <p className='text-xs hidden md:block'>Emmanuella oba</p>
          </div>
        </div>
      </div>

      {/* dasboard main */}
      <div className="grid grid-cols-3">

        {/* left side */}
      <div className="lg:col-span-2 col-span-3 ">

        {/* top banner */}
        <div className='w-full bg-white rounded-lg overflow-hidden'>
          <div className="grid grid-cols-2">
              <div className='flex flex-col m-auto gap-1 lg:gap-5 p-4 '>
                  <h1 className='text-black text-xl md:text-2xl text-center'>
                      Hi, Africana Restaurant
                  </h1>
                  <p className='text-sm md:text-base lg:text-lg text-black text-center'>Welcome to <span className='text-[#E2725B]'>AfriBite</span></p>

              </div>
              <div className=' lg:h-56  flex'><img src={bannerImage} alt="" className=" lg:w-full" /></div>
            </div>
        </div>

        <div className='grid grid-cols-2 gap-4 mt-4 '>

          <div className='relative bg-white rounded-lg p-4 '>
            <span className="absolute right-5 top-6 md:right-10 md:top-5 md:text-3xl text-n-n3"><IoIosArrowDropdown /></span>

            <p className="text-center my-2">Available Dish</p>

            <div className='w-full m-auto flex items-center px-2'>
              <img src={dishIcon} alt="" className="rounded-full bg-[#E2725B]/50 p-1 border-2 border-red-300 ml-5 h-10 md:h-full" />
              <div className='text-black/60 md:text-4xl font-semibold text-center flex-1 md:mr-14'>
                145
              </div>
            </div>

            <div className="w-full flex my-2 md:my-4">
              <div className='px-2 py-1 rounded-2xl border-[#808000] bg-[#808000]/30 m-auto'>
              <p className="">+ 10 New Add</p>
              </div>
            </div>

          </div>

          <div className='relative bg-white rounded-lg p-4'>

            <span className="absolute right-5 top-6 md:right-10 md:top-5 md:text-3xl text-n-n3"><IoIosArrowDropdown /></span>

            <p className="text-center my-2">Total Orders</p>

            <div className='w-full m-auto flex items-center px-2'>
              <img src={vector} alt="" className="rounded-full bg-yellow-200/50 p-1 border-2 border-yellow-200 h-10 md:h-full" />
              <div className='text-black/60 md:text-4xl font-semibold text-center flex-1 md:mr-12 '>
                    1,500
              </div>
            </div>


            <div className="w-full flex my-2 md:my-4">
              <div className='px-2 py-1 rounded-2xl border-[#808000] bg-[#808000]/30 m-auto'>
              <p className="">+ 10 New Add</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* right side */}
      <div className=" ml-6 hidden lg:block">
        <div className="bg-white px-8 p-4">
          <h1 className="text-center text-2xl font-medium mb-4 ">My Profile</h1>
          <div className="mb-8">
          <img src={profile} alt="" className="m-auto h-[100px] w-[100px] rounded-[100%] bg-[#E2725B]" />
          <p className='text-center m-4'>Emmanuella oba</p>
          </div>
          <div className="flex flex-col gap-5 my-4">
            <div className="">
              <h2 className='font-medium text-lg'>Restaurant&#39;s Name</h2>
              <p className='mt-2'>Africana Restaurant</p>
            </div>
            <div>
              <h2 className='font-medium text-lg'>Phone No</h2>
              <p className='mt-2'>08135184875</p>
            </div>
            <div>
              <h2 className='font-medium text-lg'>Email</h2>
              <p className='mt-2'>emmanuella02@gmail.com</p>
            </div>
            <div>
              <h2 className='font-medium text-lg'>Address</h2>
              <p className='mt-2'>Chevy view Estate, Lekki, Lagos</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Dashboard
