import { useEffect } from 'react';
import { StatsContainer, ChartsContainer, LogHoursTabs } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { getAllSkills, showStats } from '../../features/allSkills/allSkillsSlice';

const Stats = () => {
  const {isLoading, stats, skills} = useSelector(
    (store) => store.allSkills
  );
  const { user } = useSelector(
    (store) => store.user
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllSkills(user.id));
    dispatch(showStats(user.id));
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>

  }
  return (
    <>
      <StatsContainer />
      <LogHoursTabs />
      <ChartsContainer />
    </>
  );
};

export default Stats;