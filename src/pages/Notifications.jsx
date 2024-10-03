import React from "react";
import OrderNotification from "../components/OrderNotification.jsx";
import OrderPopup from "../components/OrderPopup.jsx";

function Notifications() {
  return (
    <div className="flex flex-row h-auto bg-slate-500 w-56">
      <div>
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