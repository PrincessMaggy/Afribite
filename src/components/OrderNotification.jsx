import ActiveIcon from '../assets/active.svg';
import Button from './button.jsx';
import { CiSearch } from "react-icons/ci";



const OrderNotification = ({orderStatus, orderTime, customerName, orderName, orderQuantity, orderPrice}) => {
    return(
        <div className="flex flex-row justify-between items-center w-[736px] rounded-md border border-n-n3 py-2 px-6 bg-notif hover:border-terra-cotta">
            <img src={ActiveIcon} className='size-2.5'/>
            <p>{orderStatus}{orderTime}</p>
            <p>{customerName} has placed an order for {orderName}</p>
            <p>£{orderPrice}</p>
            <Button
                text="View Order"
                className="bg-p-button3 hover:border-p-button3 hover:text-p-button3 hover:bg-n-n7 "
            />

            
        </div>

    
    );
};

export default OrderNotification;