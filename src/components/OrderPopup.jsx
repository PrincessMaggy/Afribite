import React, {useState} from 'react';
import Button from "./button";

const OrderPopup = ({adminName, customerName, orderName, orderQuantity, orderPrice}) => {
    return (
        <div className="flex flex-col justify-center items-center bg-notif border-2 border-terra-cotta w-[281px] text-n-n1 font-light gap-y-5 py-[21px] px-[23px] rounded-lg leading-5">
            <div className="text-sm text-n-n1">
                <p>Hi {adminName},</p><br/>
                <p>You've received a new order from {customerName}!</p><br/>
                <p className="font-normal">Order Details:</p>
                <p>Dish: {orderName}</p>
                <p>Quantity: {orderQuantity}x</p>
                <p>Total: £{orderPrice}</p><br/>
                <p>Please Start Preparing the Order.</p><br/>
                <p>You can view More Details or Update the Order Status.</p>
                <Button 
                    text="Finished Cooking"
                    className="bg-accent text-notif text-lg p-4 rounded-lg"
                />
            </div>
            {/* <button className="bg-accent text-notif text-lg p-4 rounded-[10px]">Update Status</button> */}
        </div>

    ); 
};

export default OrderPopup;