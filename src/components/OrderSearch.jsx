import { CiSearch } from "react-icons/ci";

const OrderSearch = () => {
    return(
        <div className="flex flex-row items-center bg-inherit border border-[#E2725B]/20 focus:outline-none focus:border-[#E2725B] rounded-3xl">
          <CiSearch className='text-2xl text-n-n3 w-1/4'/>
          <input type="text" className="w-3/4 bg-inherit border-none" placeholder='Seach for Orders'/>
            
        </div>
    );
};

export default OrderSearch;