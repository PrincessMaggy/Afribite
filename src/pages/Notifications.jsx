import React, { useState, useEffect } from "react";
import { getFirestore, collection, getDocs} from "@firebase/firestore";
import OrderSearch from "../components/OrderSearch.jsx";
import OrderTabs from "../components/OrderTabs.jsx";

function Notifications() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrderData = async () => {
      const db = getFirestore();
      const ordersRef = collection(db, 'orders');
      const ordersSnapshot = await getDocs(ordersRef);
      const ordersList = ordersSnapshot.docs.map((doc) => ({
        id:doc.id,
        ...doc.data(),
      }));

      console.log("Fetched Orders:", ordersList); // Add this line
      setOrders(ordersList);
    };
    getOrderData();

  },[]);

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
        <OrderTabs orders={orders}/>
      </div>
    </div>
  );
}

export default Notifications;