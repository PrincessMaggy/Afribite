import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Online', value: 400 },
    { name: 'Offline', value: 300 },
  ];
  const COLORS = ['#808000', '#E2725B'];

const CustomerChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
    <PieChart>
    <Pie
      data={data}
      innerRadius={70}
      outerRadius={80}
      fill="#8884d8"
      startAngle={180}
      endAngle={-180}
    
      dataKey="value"
    >
      {data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
      ))}
    </Pie>
    </PieChart>
      
    </ResponsiveContainer>
  )
}

export default CustomerChart
