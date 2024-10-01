import bannerImage from '../assets/image.png'
import { CiSearch } from "react-icons/ci";

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
          <img src={bannerImage} alt="" className="m-auto h-[50px] w-[50px] rounded-[100%]" />
          <div className="flex flex-col">
            <p className='text-base'>Emmanuella 1234</p>
            <p className='text-xs'>Emmanuella oba</p>
          </div>
        </div>
      </div>

      {/* dasboard main */}
      <div className="grid grid-cols-3">
        {/* left side */}
      <div className="col-span-2">
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
      </div>

      {/* right side */}
      <div className=" ml-6">
        <div className="bg-white px-8 p-4">
          <h1 className="text-center text-2xl font-medium mb-4 ">My Profile</h1>
          <div className="mb-8">
          <img src={bannerImage} alt="" className="m-auto h-[100px] w-[100px] rounded-[100%]" />
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
