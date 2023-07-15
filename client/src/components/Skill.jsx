import { FaLocationArrow, FaCalendarAlt, FaCalendarWeek, FaHourglassHalf, FaClipboardList } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Styles from '../assets/styles/SkillCSS';
import { useDispatch } from 'react-redux';
import SkillInfo from './SkillInfo';
import { deleteSkill, setEditSkill } from '../features/skills/skillsSlice';
import { formatDistance, subDays, add, format } from 'date-fns'

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
  isEditing,
}) => {
  const dispatch = useDispatch();

  // calculate the estimated coompleteion date
  const hoursPerWeek = days_per_week * hour_per_day;
  const totalWeeks = (total_hours / hoursPerWeek);
  const daysToComplete = Math.round(totalWeeks * 7);

  const startDate = format(new Date(date_created), 'MMM dd, yyyy');
  const completeDate = add(new Date(startDate), {days: daysToComplete});
  const completeDay = format(new Date(completeDate),'MMM dd, yyyy');
  // calculate the estimated coompleteion date END=====

// icon to chose from when creating a skill
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
          <SkillInfo icon={<FaLocationArrow />} text={startDate} title={'Start date'} />
          <SkillInfo icon={<FaCalendarAlt />} text={completeDay} title={'Estimate end date'} />
          <SkillInfo icon={<FaCalendarWeek />} text={`${days_per_week} - Days per week`} />
          <SkillInfo icon={<FaHourglassHalf />} text={`${hour_per_day} - hour per day`} />
          <SkillInfo icon={<FaClipboardList />} text={`${completed_hours} - completed hours`} c='hour' />
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
                    hour_per_day,
                    icon
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
              Delete
            </button>
          </div>
        </footer>
      </div>
    </Styles>
  );
};
export default Skill;
