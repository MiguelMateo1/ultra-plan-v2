import { useState } from 'react';
import BarChart from './BarChart';
import AreaChart from './AreaChart';
import { useSelector } from 'react-redux';
import Styles from '../assets/styles/ChartContCSS';

const ChartsContainer = () => {
  const [barChart, setBarChart] = useState(true);
  const { stats } = useSelector((store) => store.allSkills);

  return (
    <Styles>
      <h4>Monthly hours</h4>
      <button type='button' onClick={() => setBarChart(!barChart)}>
        {barChart ? 'Area Chart' : 'Bar Chart'}
      </button>
      {barChart ? <BarChart data={stats} /> : <AreaChart data={stats} />}
    </Styles>
  );
};

export default ChartsContainer;
