import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

const AreaChartComponent = ({ data, year }) => {

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
    //  gets data and create object array format to pass into the chart
    const resultArray = months.map((month) => ({
      month: month,
      hours: selectYearData[month]
    }));
    
  return (
    <ResponsiveContainer width='100%' height={300} >
      <AreaChart data={resultArray} margin={{ top: 50, left: -20}}>
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
