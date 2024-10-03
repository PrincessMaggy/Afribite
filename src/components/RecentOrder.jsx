import { LuPoundSterling } from "react-icons/lu";


const RecentOrder = ({image, dish, price, date, status}) => {
  return (
    <div>
        <div className="flex justify-between items-center  border border-[#E2725B]/20 text-xs rounded-2xl p-2">
            <img src={image} alt="" className="" />

            <div className="flex flex-col">
              <p className="">{dish}</p>
              <span className='mt-1 flex items-center gap-1'> <LuPoundSterling className=" text-n-n3" />{price}</span>
            </div>

            <div className="text-end">
              <p className="text-xs">{date}</p>
              <p className="text-[#808000] font-semibold mt-1 text-xs">{status}</p>
            </div>
          </div>
    </div>
  )
}

export default RecentOrder
