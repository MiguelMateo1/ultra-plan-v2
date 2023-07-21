import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const BarChartComponent = ({ data, year }) => {
  
    // get stats for selected year to pass to the charts
    function getObjectByYear(stats, targetYear) {
      const foundObject = stats.find(item => {
        return item.year == targetYear;
      });
      return foundObject;
    }

  if (data.length > 0) {
    const selectYearData = getObjectByYear(data,year);

    const months = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];
    //  get data and create object array format to pass into the chart
    const resultArray = months.map((month) => ({
      month: month,
      hours: selectYearData[month]
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
