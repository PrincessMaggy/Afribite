
const OrderPopup = () => {
    return (
        <div className="flex flex-col justify-center items-center bg-notif w-[281px] text-[#333333] font-light gap-y-5 py-[21px] px-[23px] rounded-lg leading-5">
            <div className="text-sm">
                <p>Hi UserName,</p><br/>
                <p>You've received a new order from CustomerName!</p><br/>
                <p className="font-normal">Order Details:</p>
                <p>Quantity:</p>
                <p>Total:</p><br/>
                <p>Please Start Preparing the Order.</p><br/>
                <p>You can view More Details or Update the Order Status.</p>
            </div>
            <button className="bg-accent text-notif text-lg p-4 rounded-[10px]">Update Status</button>
        </div>

    ); 
};

export default OrderPopup;