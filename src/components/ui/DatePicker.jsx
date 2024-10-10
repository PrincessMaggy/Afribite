import React, { useRef } from "react";
import DatePicker from "react-datepicker";
import { MdDateRange } from "react-icons/md";
import "react-datepicker/dist/react-datepicker.css";

export const ChoiceDate = ({ value, onChange }) => {
  const datePickerRef = useRef(null);

  const handleDivClick = () => {
    if (datePickerRef.current) {
      datePickerRef.current.setFocus();
    }
  };

  return (
    <div className="flex grid-cols-2 justify-between overflow-hidden">
      <div 
        className="flex items-center space-x-1 border-2 rounded-md text-white border-white p-2 md:p-4 w-[160px] md:w-[200px]"
      >
        <div className="flex items-center mx-2 md:mx-4 space-x-1" onClick={handleDivClick}>
          <span className="inline-flex gap-0 border-[2px] rounded-full border-white cursor-pointer">
            <MdDateRange size={20} className="m-[3px]" />
          </span>
          <DatePicker
            ref={datePickerRef}
            className="px-0 text-sm md:text-base bg-transparent w-full border-none border-transparent focus:outline-none"
            selected={value}
            onChange={(date) => onChange(date)}
          />
        </div>
      </div>
    </div>
  );
};

export default ChoiceDate;