import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

const AreaChartComponent = ({ data }) => {
  if (data.length > 0) {
    
    //  get data and create object array format to pass into the chart
    const months = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];
    const resultArray = months.map((month) => ({
      month: month,
      hours: data[0][month]
    }));
    
  return (
    <ResponsiveContainer width='100%' height={300}>
      <AreaChart data={resultArray} margin={{ top: 50 }}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='month' />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Area type='monotone' dataKey='hours' stroke='#1e3a8a' fill='#3b82f6' />
      </AreaChart>
    </ResponsiveContainer>
  );
  }
};
export default AreaChartComponent;
