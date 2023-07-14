import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Styles from '../assets/styles/Skill';
import { useDispatch } from 'react-redux';
import SkillInfo from './SkillInfo';
import { deleteSkill } from '../features/skills/skillsSlice';

import { 
  IoBookSharp,IoBarbellSharp,IoBasketballSharp,
  IoBicycleSharp,IoEasel,IoFlaskSharp,IoHeadsetSharp,
  IoHardwareChipSharp,IoPencilSharp,IoReaderSharp,IoSchool,
  IoTelescopeSharp,IoTerminal,IoDesktop } 
from "react-icons/io5";

const Skill = ({
  id,
  total_hours,
  skill_name,
  days_per_week,
  hour_per_day,
  date_created,
  icon,
  completed_hours,
}) => {
  const dispatch = useDispatch();

  const date = 'MMM Do, YYYY';
  const skillIcons = [<IoBookSharp/>,<IoBarbellSharp/>,<IoBasketballSharp/>,<IoBicycleSharp/>,
      <IoEasel/>,<IoFlaskSharp/>,<IoHeadsetSharp/>,<IoHardwareChipSharp/>, <IoPencilSharp/>,
      <IoReaderSharp/>,<IoSchool/>,<IoTelescopeSharp/>,<IoTerminal/>,<IoDesktop/>
  ];

  return (
    <Styles>
      <header>
        <div className='main-icon'>{skillIcons[icon]}</div>
        <div className='info'>
          <h5>{skill_name}</h5>
          <p>{total_hours} hours</p>
        </div>
      </header>
      <div className='content'>
        <div className='content-center'>
          <SkillInfo icon={<FaLocationArrow />} text={`start date 4/33/2023`}/>
          <SkillInfo icon={<FaCalendarAlt />} text={date} />
          <SkillInfo icon={<FaBriefcase />} text={days_per_week} />
          <SkillInfo icon={<FaBriefcase />} text={hour_per_day} />
          <SkillInfo icon={<FaBriefcase />} text={`completed hours${completed_hours}`} />
          <div className={`status`}>in progress</div>
        </div>
        <footer>
          <div className='actions'>
            <Link
              to='/add-skill'
              className='btn edit-btn'
              onClick={() =>
                dispatch(
                  setEditSkill({
                    editSkillId: id,
                    total_hours,
                    skill_name,
                    days_per_week,
                    hour_per_day
                  })
                )
              }
            >
              Edit
            </Link>
            <button
              type='button'
              className='btn delete-btn'
              onClick={() => dispatch(deleteSkill(id))}
            >
              delete
            </button>
          </div>
        </footer>
      </div>
    </Styles>
  );
};
export default Skill;
