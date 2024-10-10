import { CiSearch } from "react-icons/ci";

const OrderSearch = () => {
    return(
        <div className="flex flex-row items-center ml-10 bg-inherit border border-[#E2725B]/20 focus:outline-none focus:border-[#E2725B] rounded-3xl">
          <CiSearch className='text-2xl text-n-n3'/>
          <input type="text" className="w-3/4 px-12 bg-inherit border-none" placeholder='Seach for Orders'/>
            
        </div>
    );
};

export default OrderSearch;