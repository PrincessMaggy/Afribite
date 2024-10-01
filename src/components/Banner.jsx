import bannerImage from '../assets/image.png'
const Banner = ({text}) => {
  return (
    <div className='w-full bg-white rounded-md'>
        <div className="grid grid-cols-2">
            <div className='flex flex-col m-auto gap-1 sm:gap-5 p-4'>
                <h1 className='text-[#E2725B] text-xl sm:text-4xl text-center'>
                    Afribite
                </h1>
                <p className='text-xs sm:text-lg text-center'>{text}</p>

            </div>
            <div className=' lg:h-56  flex'><img src={bannerImage} alt="" className=" lg:w-full" /></div>
          </div>
    </div>
  )
}

export default Banner
