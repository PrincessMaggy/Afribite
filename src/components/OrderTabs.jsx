import React, {useState} from 'react';
import OrderNotification from './OrderNotification';

const OrderTabs = ({orders}) => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        {
            title: 'New',
            content: orders.filter(order => order.orderStatus.toLowerCase() === 'new').map(order => (
                <OrderNotification
                    key={order.id} // Use the document ID
                    adminName="Emmanuella"
                    orderStatus={order.orderStatus}
                    orderTime={order.orderTime}
                    customerName={order.customerName}
                    orderName={order.orderName}
                    orderQuantity={order.orderQuantity}
                    orderPrice={order.orderPrice}
                    deliveryTime={order.deliveryTime}
                />



            ) ),
            
        },
        {
            title: 'Finished',
            content: orders
                .filter(order => order.orderStatus.toLowerCase() === 'finished')
                .map(order => (
                    <OrderNotification
                        key={order.id}
                        adminName="Emmanuella"
                        orderStatus={order.orderStatus}
                        orderTime={order.orderTime}
                        customerName={order.customerName}
                        orderName={order.orderName}
                        orderQuantity={order.orderQuantity}
                        orderPrice={order.orderPrice}
                        deliveryTime={order.deliveryTime}
                    />
                )),
        },
        {
            title: 'Delivered',
            content: orders
                .filter(order => order.orderStatus.toLowerCase() === 'delivered')
                .map(order => (
                    <OrderNotification
                        key={order.id}
                        adminName="Emmanuella"
                        orderStatus={order.orderStatus}
                        orderTime={order.orderTime}
                        customerName={order.customerName}
                        orderName={order.orderName}
                        orderQuantity={order.orderQuantity}
                        orderPrice={order.orderPrice}
                        deliveryTime={order.deliveryTime}
                    />
                )),
        },
    ];

    console.log("Orders in Tabs:", orders);

    return (
        <div className='flex flex-col gap-12 h-full w-full rounded-lg'>
            <div className='flex flex-row gap-12'>
            {tabs.map((tab,index) => (
                <button
                    key={index}
                    className={`${activeTab === index 
                        ? 'border-b-2 font-semibold border-p-button text-p-button' : ''}`}
                    onClick={() => setActiveTab(index)}
                    >
                        {tab.title}
                </button>
            ))}
            </div>
            <div className='flex flex-row'>
                {tabs[activeTab].content.map((item) => item)}
                <OrderNotification
                    key={orders.id}
                    adminName="Emmanuella"
                    orderStatus={orders.orderStatus}
                />
            </div>
        </div>
    );
};


export default OrderTabs;