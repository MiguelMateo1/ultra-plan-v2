import { useEffect } from 'react';
import Skill from './Skill';
import Styles from '../assets/styles/SkillsContainerCSS';
import { useSelector, useDispatch } from 'react-redux';
import { getAllSkills } from '../features/allSkills/allSkillsSlice';


const SkillsContainer = () => {
  const {skills,isLoading,totalSkills} = useSelector((store) => store.allSkills);
  const {user} = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const userId = user.id

  useEffect(() => {
    dispatch(getAllSkills(userId));
  }, []);

  // console.log(userId)

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (skills.length === 0) {
    return (
      <Styles>
        <h2>No Skills to display...</h2>
      </Styles>
    );
  }

  return (
    <Styles>
      <h5>
        {totalSkills} skill{skills.length > 1 && 's'} found
      </h5>
      <div className='jobs'>
        {skills.map((skill) => {
          return <Skill key={skill.id} {...skill} />;
        })}
      </div>
    </Styles>
  );
};
export default SkillsContainer;
