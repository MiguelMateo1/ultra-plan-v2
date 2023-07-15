import Styles from '../assets/styles/SkillInfoCSS';

const JobInfo = ({ icon, text, title, c }) => {
  return (
    <Styles>
      <h6>{title}</h6>
      <span className='icon'>{icon} </span>
      <span className={`text ${c}`}>{text} </span>
    </Styles>
  );
};
export default JobInfo;
