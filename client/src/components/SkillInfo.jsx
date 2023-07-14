import Styles from '../assets/styles/SkillInfoCSS';

const JobInfo = ({ icon, text }) => {
  return (
    <Styles>
      <span className='icon'>{icon} </span>
      <span className='text'>{text} </span>
    </Styles>
  );
};
export default JobInfo;
