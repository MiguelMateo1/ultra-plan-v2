import { useEffect } from 'react';
import { StatsContainer, ChartsContainer } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { getAllSkills, showStats } from '../../features/allSkills/allSkillsSlice';
import LogHours from '../../components/LogHours';

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
      <LogHours />
      <StatsContainer />
      <ChartsContainer />
    </>
  );
};

  export default Stats;