import React, {useState} from 'react';
import OrderNotification from './OrderNotification';

const OrderTabs = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        {
            title: 'New',
            content:[
                <OrderNotification
                    id="1"
                    orderStatus="New"
                    orderTime="10mins" 
                    customerName="Favour Chinedu"
                    orderName="Jollof Rice"
                    orderQuantity="2"
                    orderPrice="20"
                />,
            ],
        },
        {
            title: 'Finished',
            content:[
                <OrderNotification
                    id="2"
                    orderStatus="Ready for Delivery"
                    orderTime="30mins"
                    customerName="Ade Oluwa"
                    orderName="Suya"
                    orderQuantity="1"
                    orderPrice="15"
                />,
            ],
        },
        {
            title: 'Delivered',
            content:[
                <OrderNotification
                    id="3"
                    orderStatus="Delivered"
                    orderTime="45mins"
                    customerName="Amaka Nwoke"
                    orderName="Egusi Soup"
                    orderQuantity="3"
                    orderPrice="25"
                />,
            ],
        },
    ];

    return (
        <div className='flex flex-row items-center gap-12 h-8 border w-full rounded-lg'>
            {tabs.map((tab,index) => (
                <button
                key={index}
                className={`${activeTab === index ? 'border-b-2 border-p-button text-p-button' : ''}`}
                onClick={() => setActiveTab(index)}
                >
                {tab.title}
                </button>
            ))}
        </div>
    );
};


export default OrderTabs;