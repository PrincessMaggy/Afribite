import React, {useState} from 'react';
import OrderNotification from './OrderNotification';

const OrderTabs = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        {
            title: 'New',
            content:[
                <OrderNotification
                    key="1"
                    id="1"
                    adminName="Emmanuella"
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
                    key="2"
                    id="2"
                    adminName="Emmanuella"
                    orderStatus="Finished"
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
                    key="3"
                    id="3"
                    adminName="Emmanuella"
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
            </div>
        </div>
    );
};


export default OrderTabs;