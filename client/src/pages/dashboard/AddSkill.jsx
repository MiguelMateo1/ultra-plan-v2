import { FormRow, FormRowSelect } from '../../components';
import Styles from '../../assets/styles/ProfileFormCSS';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {handleChange,clearValues,createSkill,editSkill} from '../../features/skills/skillsSlice';
// icons
import { 
  IoBookSharp,IoBarbellSharp,IoBasketballSharp,
  IoBicycleSharp,IoEasel,IoFlaskSharp,IoHeadsetSharp,
  IoHardwareChipSharp,IoPencilSharp,IoReaderSharp,IoSchool,
  IoTelescopeSharp,IoTerminal,IoDesktop} 
from "react-icons/io5";

const AddSkill = () => {
  const {
    isLoading,
    skill_name,
    total_hours,
    days_per_week,
    hour_per_day_options,
    days_per_week_options,
    hour_per_day,
    skill_icon,
    // completed_hours,
    isEditing,
    editSkillId,
  } = useSelector((store) => store.skill);

  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const userId = user.id
  const icons = document.querySelectorAll('.skill-icon');

  // icons
  const skillIcons = [<IoBookSharp/>,<IoBarbellSharp/>,<IoBasketballSharp/>,<IoBicycleSharp/>,
    <IoEasel/>,<IoFlaskSharp/>,<IoHeadsetSharp/>,<IoHardwareChipSharp/>, <IoPencilSharp/>,
    <IoReaderSharp/>,<IoSchool/>,<IoTelescopeSharp/>,<IoTerminal/>,<IoDesktop/>
  ];
  
// handle from submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // remove active class from all icons
    icons.forEach(s => {
      s.classList.remove('active')
    })

    if (!skill_name || !total_hours|| !days_per_week || !hour_per_day || !skill_icon ) {
      toast.error('Please fill out all fields');
      return;
    }
    if (isEditing) {
      dispatch(
        editSkill({
          skillId: editSkillId,
          skill: { skill_name, total_hours, days_per_week, hour_per_day, skill_icon },
        })
      );
      navigate('/my-skills')
      return;
    }
    dispatch(createSkill({ skill_name, total_hours, days_per_week, hour_per_day, userId, skill_icon}));
  };
  // hanle from submit END=====


  // handle inpust + icon
  const handleSkillInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ name, value }));
  };

  const handleSkillIcon = (e,selectedIcon) => {
    // remove active class from all icons
    icons.forEach(s => {
      s.classList.remove('active')
    })
    // sets active class to clicked icon
    e.currentTarget.classList.add('active')
    // updates state
    const name = 'skill_icon';
    const value = selectedIcon;
    dispatch(handleChange({ name, value }));
  };
  // handle inpust + icon END====

  return (
    <Styles>
      <form className='form'>
        <h3>{isEditing ? 'edit skill' : 'add skill'}</h3>
        <div className='form-center'>
          {/* skill_name */}
          <FormRow
            type='text'
            labelText='Skill name'
            name='skill_name'
            value={skill_name}
            handleChange={handleSkillInput}
          />
          {/* total hours */}
          <FormRow
            type='text'
            name='total_hours'
            labelText='total hours to commit'
            value={total_hours}
            handleChange={handleSkillInput}
          />
          {/* days per week*/}
          <FormRowSelect
            name='days_per_week'
            labelText='Days Per Week you will Commit?'
            value={days_per_week}
            handleChange={handleSkillInput}
            list={days_per_week_options}
          />
          {/* hours per day*/}
          <FormRowSelect
            name='hour_per_day'
            labelText='Hours Per day you will Commit?'
            value={hour_per_day}
            handleChange={handleSkillInput}
            list={hour_per_day_options}
          />
          {/* icons select */}
          <div className='form-row icon-row'>
            <h3 className='form-label'>select icon</h3>
            {skillIcons.map((icon,index)=> {
              return <div 
                key={index} 
                className={`skill-icon`}
                onClick={(e)=> handleSkillIcon(e,index)}
              >
                {icon}
              </div>
            })}
          </div>

          <div className='btn-container'>
            <button
              type='button'
              className='btn btn-block clear-btn'
              onClick={() => dispatch(clearValues())}
            >
              Clear
            </button>
            <button
              type='submit'
              className='btn btn-block submit-btn'
              onClick={handleSubmit}
              disabled={isLoading}
            >
              {isEditing ? 'Update skill' : 'Create skill'}
            </button>
          </div>
        </div>
      </form>
    </Styles>
  );
};

export default AddSkill;
