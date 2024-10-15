import React, {useState} from 'react';
import OrderNotification from './OrderNotification';

const OrderTabs = () => {
    const [activeTab, setActiveTab] = useState(0)

    const tabs = [
        {
            title: 'New',
            content:[],
        },
        {
            title: 'Finished',
            content:[],
        },
        {
            title: 'Delivered',
            content:[],
        },
    ]

    return (
        <div className='flex flex-row items-center gap-12 h-8 border w-full rounded-lg'>
            <button className='border-b-4 border-p-button'>New</button>
            <button>Finished</button>
            <button>Delivered</button>

        </div>
    );
};


export default OrderTabs;