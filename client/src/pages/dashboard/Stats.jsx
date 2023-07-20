import { useEffect } from 'react';
import { StatsContainer, ChartsContainer, LogHoursTabs, Loader } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { getAllSkills, showStats } from '../../features/allSkills/allSkillsSlice';

const Stats = () => {
  const {isLoading} = useSelector(
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
    return <Loader/>
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