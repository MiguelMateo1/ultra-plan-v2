/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Styles from '../assets/styles/SkillCSS';
import { useDispatch } from 'react-redux';
import SkillInfo from './SkillInfo';
import { deleteSkill, setEditSkill } from '../features/skills/skillsSlice';
import { add, format } from 'date-fns'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
// icons
import { FaLocationArrow, FaCalendarAlt, FaCalendarWeek, FaHourglassHalf, FaClipboardList } from 'react-icons/fa';
import { PiPianoKeysFill, PiGuitarFill } from "react-icons/pi";
import { 
  IoBookSharp,IoBarbellSharp,IoBasketballSharp,
  IoBicycleSharp,IoEasel,IoFlaskSharp,IoHeadsetSharp,
  IoHardwareChipSharp,IoPencilSharp,IoReaderSharp,IoSchool,
  IoTelescopeSharp,IoTerminal,IoDesktop,IoMusicalNotes,IoBrush } 
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

  // calculate the estimated coompleteion date
  const hoursPerWeek = days_per_week * hour_per_day;
  const totalWeeks = (total_hours / hoursPerWeek);
  const daysToComplete = Math.round(totalWeeks * 7);

  const startDate = format(new Date(date_created), 'MMM dd, yyyy');
  const completeDate = add(new Date(startDate), {days: daysToComplete});
  const completeDay = format(new Date(completeDate),'MMM dd, yyyy');
  // calculate the estimated coompleteion date END=====

// icon to chose from when creating a skill
  const skillIcons = [<IoBookSharp/>,<IoBarbellSharp/>,<PiPianoKeysFill />,<PiGuitarFill />,<IoBasketballSharp/>,<IoBicycleSharp/>,
      <IoEasel/>,<IoFlaskSharp/>,<IoHeadsetSharp/>,<IoHardwareChipSharp/>,<IoBrush />, <IoPencilSharp/>,
      <IoReaderSharp/>,<IoSchool/>,<IoTelescopeSharp/>,<IoTerminal/>,<IoDesktop/>,<IoMusicalNotes/>
  ];

  // modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 350,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

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
          <div 
            className={`status ${total_hours <= completed_hours && 'completed'}`}>
            {total_hours <= completed_hours ? 'Completed!' : 'in progress'}
          </div>
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
            {/* delete btn and modal */}
             <Button onClick={handleOpen} className='btn delete-btn'>Delete</Button>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={modalStyle}>
                    <h4>confirm delete skill?</h4>
                      <Button sx={{ mt: 1, color: 'black',backgroundColor: 'red' }} 
                        onClick={() => dispatch(deleteSkill(id))}
                        >
                        Delete
                      </Button>
                  </Box>
                </Modal>
          </div>
        </footer>
      </div>
    </Styles>
  );
};
export default Skill;
