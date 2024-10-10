import React from "react";
import OrderNotification from "../components/OrderNotification.jsx";
import OrderPopup from "../components/OrderPopup.jsx";
import OrderSearch from "../components/OrderSearch.jsx";
import { CiSearch } from "react-icons/ci";


function Notifications() {
  return (
    <div className="bg-eggshell rounded-lg p-4 flex flex-col w-full  ">
      <div className="flex flex-row">
        <div className="flex flex-row justify-items justify-between">
          <h1 className="text-2xl text-terra-cotta font-medium">Order Notifications</h1>
          <OrderSearch/>
        </div>
      </div>
      <div className="m-5">
        <OrderNotification 
            orderTime="10 mins" 
            customerName="Favour Chinedu"
            orderName="Jollof Rice"
            orderQuantity="2"
            orderPrice="20"
        />
      </div>
      
      <div className="flex- w-[1072px] h-[847px] gap-8">
          
      <OrderPopup
            adminName="Maryam"
            customerName="Favour Chinedu"
            orderName="Jollof Rice"
            orderQuantity={2}
            orderPrice={20.50}
      />
      </div>
    </div>
  );
}

export default Notifications;