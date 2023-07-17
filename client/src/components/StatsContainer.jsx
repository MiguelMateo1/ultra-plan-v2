import StatItem from './StatItem';
import { FaSuitcaseRolling, FaCalendarCheck, FaBug } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import Styles from '../assets/styles/StatsContCSS'; 

const StatsContainer = () => {
  const { stats, skills } = useSelector((store) => store.allSkills);

// Function to calculate the sum of key
const sumCompletedHours = (data, key) => {
  let totalHours = 0;

  for (const item of data) {
    totalHours += item[key];
  }
  return totalHours;
}


  const defaultStats = [
    {
      title: 'totla skills',
      count: skills.length || 0,
      icon: <FaSuitcaseRolling />,
      color: '#e9b949',
      bcg: '#fcefc7',
    },
    {
      title: 'total hours completed',
      count: sumCompletedHours(skills, 'completed_hours'),
      icon: <FaCalendarCheck />,
      color: '#647acb',
      bcg: '#e0e8f9',
    },
    {
      title: 'total_hours',
      count: sumCompletedHours(skills, 'total_hours'),
      icon: <FaBug />,
      color: '#d66a6a',
      bcg: '#ffeeee',
    },
  ];

  return (
    <Styles>
      {defaultStats.map((item, index) => {
        return <StatItem key={index} {...item} />;
      })}
    </Styles>
  );
};
export default StatsContainer;
