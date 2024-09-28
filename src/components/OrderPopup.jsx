
const OrderPopup = () => {
    return (
        <div className="w-[281px] h-[387px] border">
            <div className="flex flex-col">
                <div className="w-[232px] leading-6 text-sm">
                    <p className="text-[#333333] font-light font-['Poppins'] capitalize leading-tigh">Hi UserName,</p><br/>
                    <p>You've received a new order from CustomerName!</p><br/>
                    <p>Order Details:</p>
                    <p>Quantity:</p>
                    <p>Total:</p><br/>
                    <p>Please Start Preparing the Order.</p><br/>
                    <p>You can view More Details or Update the Order Status.</p>
                </div>
                <button className="justify-items-center bg-blue-500">Update Status</button>
            </div>
        </div>

    );

    
}

export default OrderPopup;