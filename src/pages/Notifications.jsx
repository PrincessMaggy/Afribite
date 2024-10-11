import React from "react";
import OrderNotification from "../components/OrderNotification.jsx";
import OrderPopup from "../components/OrderPopup.jsx";
import OrderSearch from "../components/OrderSearch.jsx";
import { CiSearch } from "react-icons/ci";


function Notifications() {
  return (
    <div className="bg-eggshell rounded-lg p-4 flex flex-col w-full">
      {/* title and search */}
      <div className="flex flex-row">
        <div className="flex justify-between w-full">
          <h1 className="text-4xl text-terra-cotta">Order Notifications</h1>
          <OrderSearch/>
        </div>
      </div>
      {/* notification tile & view order popup */}
      <div className="w-full">
        <OrderNotification 
            id="1"
            orderStatus="New"
            orderTime="10mins" 
            customerName="Favour Chinedu"
            orderName="Jollof Rice"
            orderQuantity="2"
            orderPrice="20"
        />
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