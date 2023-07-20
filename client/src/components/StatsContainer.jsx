import StatItem from './StatItem';
import { FaAward, FaCalendarCheck, FaClock } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import Styles from '../assets/styles/StatsContCSS'; 

const StatsContainer = () => {
  const { skills } = useSelector((store) => store.allSkills);

// Function to calculate the sum of passed in key
const sumCompletedHours = (data, key) => {
  let totalHours = 0;
  for (const item of data) {
    totalHours += item[key];
  }
  return totalHours;
}

  const defaultStats = [
    {
      title: 'total skills',
      count: skills.length || 0,
      icon: <FaAward />,
      color: '#e9b949',
      bcg: '#E7E6B7',
    },
    {
      title: 'completed hours',
      count: sumCompletedHours(skills, 'completed_hours'),
      icon: <FaCalendarCheck />,
      color: '#647acb',
      bcg: '#e0e8f9',
    },
    {
      title: 'committed hours',
      count: sumCompletedHours(skills, 'total_hours'),
      icon: <FaClock />,
      color: '#41bdc2',
      bcg: '#c4ebec',
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
