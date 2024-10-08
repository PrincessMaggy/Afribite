import ActiveIcon from '../assets/active.svg'
import Button from './button.jsx'

const OrderNotification = ({orderTime, customerName, orderName, orderQuantity, orderPrice}) => {
    return (
        <div className="flex flex-row justify-between items-center w-[736px] bg-[eggshell]">
            <img src={ActiveIcon} className="w-10 h-10"/>
            <p>{orderTime}</p>
            <p>{customerName} has placed an order for {orderName}</p>
            <p>£{orderPrice}</p>
            <Button/>
        </div>
    );
}

export default OrderNotification