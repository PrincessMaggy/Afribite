import React, { useState } from "react";
import OrderSearch from "../components/OrderSearch.jsx";
import OrderTabs from "../components/OrderTabs.jsx";
import OrderPopup from "../components/OrderPopup.jsx";



function Notifications() {
    
  return (
    <div className="bg-eggshell rounded-lg p-4 flex flex-col w-full h-full gap-8">
      {/* title and search */}
      <div className="flex flex-row">
        <div className="flex justify-between w-full">
          <h1 className="text-4xl text-terra-cotta">Order Notifications</h1>
          <OrderSearch/>
        </div>
      </div>
      {/* notification tile & view order popup */}
      <div className="w-full">
        <OrderTabs/>
      </div>
    </div>
  );
}

export default Notifications;