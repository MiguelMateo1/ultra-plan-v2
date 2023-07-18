import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const BarChartComponent = ({ data }) => {
  if (data.length > 0) {
    
    //  get data and create object array format to pass into the chart
    const months = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];
    const resultArray = months.map((month) => ({
      month: month,
      hours: data[0][month]
    }));
    
  return (
    <ResponsiveContainer width='100%' height={300}>
      <BarChart data={resultArray} margin={{ top: 50 }}>
        <CartesianGrid strokeDasharray='10 10 ' />
        <XAxis dataKey='month' />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Bar dataKey='hours' fill='#3b82f6' barSize={75} />
      </BarChart>
    </ResponsiveContainer>
  );
  }
};
export default BarChartComponent;
