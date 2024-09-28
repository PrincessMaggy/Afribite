import React from "react";
import AdminSidebar from "../components/AdminSidebar";
import OrderPopup from "../components/OrderPopup";
// import "../src/index.css";

function Notifications() {
  return (
    <div className="flex items-center ">
      <AdminSidebar/>
      <div className="justify-between">

        <OrderPopup/>
      </div>
      
    </div>
  );
}

export default Notifications;
