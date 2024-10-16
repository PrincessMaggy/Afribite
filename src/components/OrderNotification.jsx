import React from 'react';
import { useState } from 'react';
import ActiveIcon from '../assets/active.svg';
import Button from './button.jsx';
import OrderPopup from './OrderPopup.jsx';
import { CiSearch } from "react-icons/ci";



const OrderNotification = ({orderStatus, orderTime, customerName, orderName, orderQuantity, orderPrice}) => {
    const [popupOpen, setPopupOpen] = useState(false)

    const toggleOrderPopup = () => {
        setPopupOpen(!popupOpen);
      };
    
    return(
        <div className="flex flex-row justify-between items-center w-full rounded-md border border-n-n3 py-2 px-6 bg-notif hover:border-terra-cotta">
            <img src={ActiveIcon} className='size-2.5'/>
            <p>{orderStatus}{orderTime}</p>
            <p>{customerName} has placed an order for {orderName}</p>
            <p>£{orderPrice}</p>
            <Button
                text="View Order"
                className="bg-p-button3 hover:border-p-button3 hover:text-p-button3 hover:bg-n-n7"
                onClick={toggleOrderPopup}
            />
            {popupOpen && (
                <div className="ml-4">
                    <OrderPopup
                        adminName={adminName}
                        customerName={customerName}
                        orderName={orderName}
                        orderQuantity={orderQuantity}
                        orderPrice={orderPrice}
                    />
                </div>
            )}
            
            
        </div>

    
    );
};

export default OrderNotification;