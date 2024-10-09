import ActiveIcon from '../assets/active.svg'
import Button from './button'

const OrderNotification = ({orderTime, customerName, orderName, orderQuantity, orderPrice}) => {
    return(
        <div className="flex flex-row justify-between items-center w-[736px] p-y-[9px] p-x-[23px] bg-notif">
            <img src={ActiveIcon} className='size-2.5'/>
            <p>{orderTime}</p>
            <p>{customerName} has placed an order for {orderName}</p>
            <p>£{orderPrice}</p>
            <Button
                text="View Order"
                className="rounded-sm h-8 bg-[#808000] hover:border-[#808000] hover:text-[#808000] hover:bg-n-n7 "

            />

            
        </div>

    
    );
};

export default OrderNotification;