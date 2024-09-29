
const OrderPopup = () => {
    return (
        <div className="flex-col justify-center items-center gap-y-6 bg-notif w-[281px] h-[387px] border-solid border-t-2 rounded-[10px] font-normal text-[#333333] leading-5">
            <div className="text-[#333333] w-[232px] leading-8 text-sm">
                <p className="text-">Hi UserName,</p>
                <p>You've received a new order from CustomerName!</p>
                <p>Order Details:</p>
                <p>Quantity:</p>
                <p>Total:</p>
                <p>Please Start Preparing the Order.</p><br/>
                <p>You can view More Details or Update the Order Status.</p>
            </div>
            <button className="bg-[#e2725b] w-[127px] h-[10px] text-notif text-lg border rounded-lg">Update Status</button>
        </div>

    ); 
};

export default OrderPopup;