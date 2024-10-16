'use client';

import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const viewrsData = [
  {
    name: 'Mon',
    viewed: 4000,
    profit: 2400,
  },
  {
    name: 'Tue',
    viewed: 3000,
    profit: 1398,
  },
  {
    name: 'Wed',
    viewed: 9800,
    profit: 2000,
  },
  {
    name: 'Thur',
    viewed: 3908,
    profit: 2780,
  },
  {
    name: 'Fri',
    viewed: 4800,
    profit: 1890,
  },
  {
    name: 'Sat',
    viewed: 3800,
    profit: 2390,
  },
  {
    name: 'Sun',
    viewed: 3800,
    profit: 2390,
  },
];

const BarChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={viewrsData}
   
      >
       
        <XAxis dataKey="name" />
        
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Bar dataKey="viewed" fill="#E2725B" />
        <Bar dataKey="profit" fill="#808000" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-white flex flex-col gap-4 rounded-md">
        <p className="text-medium text-lg">{label}</p>
        <p className="text-sm text-[#E2725B]">
          Viewed:
          <span className="ml-2">{payload[0].value}</span>
        </p>
        <p className="text-sm text-[#808000]">
          Reacted:
          <span className="ml-2">{payload[1].value}</span>
        </p>
      </div>
    );
  }
};