import React, {useState} from 'react';
import Button from "./button";

const OrderPopup = ({customerName, orderName, orderNumber, orderQuantity, orderPrice, popupOpen, toggleOrderPopup, orderStatus, updateOrderStatus, deliveryTime }) => {
    
    return (
        popupOpen && (
        <div className="flex flex-col justify-center items-center bg-notif border-2 border-terra-cotta w-[281px] text-n-n1 font-light gap-y-5 py-[21px] px-[23px] rounded-lg leading-5">
            <div className="text-sm text-n-n1">
                {orderStatus === "new" && (
                    <div>
                    <h2 className='text-xl font-normal text-p-button'>Order Details: #{orderNumber}</h2>
                    <p>New order {orderNumber} from {customerName}!</p><br/>
                    <p>Dish: {orderName}</p>
                    <p>Quantity: {orderQuantity}x</p>
                    <p>Total: £{orderPrice}</p><br/>
                    <p>Please Start Preparing the Order.</p><br/>
                    <p>You can view More Details or Update the Order Status.</p>
                    <div>
                        <Button 
                            text="Finished Cooking"
                            className="bg-accent text-notif text-lg rounded-lg"
                            onClick={() => updateOrderStatus("ongoing")}
                        />
                    </div>
                    </div>
                )}
                

                {orderStatus === "ongoing" && (
                    <div>
                    <p>Order #324 for {customerName} is finished and ready for delivery or pickup.</p><br/>
                    <p className="font-normal">Order Details:</p>
                    <p>Dish: {orderName}</p>
                    <p>Quantity: {orderQuantity}x</p>
                    <p>Total: £{orderPrice}</p><br/>
                    <p>Take the next step to complete the order.</p><br/>
                    <Button
                      text="Ready for Pickup"
                      className="bg-accent text-notif text-lg p-4 rounded-lg"
                      onClick={() => updateOrderStatus("pickup")}

                    /> 
                    </div>             
                )}
                {orderStatus === "delivered" && (
                    <div>
                    <p>The delivery for Order #324 has been completed! {customerName} has received their meal, and your service was outstanding.</p><br />
                    <p className="font-normal">Order Details:</p>
                    <p>Dish: {orderName}</p>
                    <p>Quantity: {orderQuantity}x</p>
                    <p>Total: £{orderPrice}</p>
                    <p>Delivery Time: {deliveryTime}</p><br/>
                    <p>Thank you for your commitment to great service!</p><br />
                    <Button
                      text="View Order History"
                      className="bg-accent text-notif text-lg p-4 rounded-lg"
                    />
                    </div>
                )}
            </div>
        </div>
        )
    ); 
};

export default OrderPopup;