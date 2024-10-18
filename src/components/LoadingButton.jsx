import { ImSpinner8 } from "react-icons/im";

const LoadingButton = () => {
  return (
    <div>
       <div className=" flex p-3 border-2 text-xs lg:text-sm text-white font-semibold bg-[#E2725B] rounded-md items-center justify-center gap-2 " >
          <ImSpinner8 className="animate-spin text-lg" /> Loading ...
      </div>
    </div>
  )
}

export default LoadingButton
