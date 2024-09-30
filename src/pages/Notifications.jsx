import React from "react";
import AdminSidebar from "../components/AdminSidebar.jsx";
import OrderNotification from "../components/OrderNotification.jsx";
import OrderPopup from "../components/OrderPopup.jsx";
// import OrderSearch from "../components/OrderSearch.jsx"

function Notifications() {
  return (
    <div className="flex items-center">
      <AdminSidebar/>
      {/* <OrderSearch/> */}
      <div className="flex- w-[1072px] h-[847px] gap-8">
        <div className="flex-row gap-14">
          <OrderNotification
            orderTime="10 mins" 
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
    </div>
  );
}

export default Notifications;