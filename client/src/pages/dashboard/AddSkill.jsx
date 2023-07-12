import { FormRow, FormRowSelect } from '../../components';
import Styles from '../../assets/styles/ProfileFormCSS';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import {handleChange,clearValues,createSkill,editSkill} from '../../features/skills/skillsSlice';
import { useEffect } from 'react';


const addSkill = () => {
  const {
    isLoading,
    skill_name,
    total_hours,
    days_per_week,
    hour_per_day_options,
    days_per_week_options,
    hour_per_day,
    isEditing,
    editSkillId,
  } = useSelector((store) => store.skill);

  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const userId = user.id


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!skill_name || !total_hours|| !days_per_week || !hour_per_day) {
      toast.error('Please fill out all fields');
      return;
    }
    if (isEditing) {
      dispatch(
        editSkill({
          skillId: editSkillId,
          skill: { skill_name, total_hours, days_per_week, hour_per_day },
        })
      );
      return;
    }
    dispatch(createSkill({ skill_name, total_hours, days_per_week, hour_per_day, userId}));
  };

  const handleSkillInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ name, value }));
  };

  // useEffect(() => {
  //   if (!isEditing) {
  //     dispatch(
  //       handleChange({
  //         name: 'jobLocation',
  //         value: user.location,
  //       })
  //     );
  //   }
  // }, []);

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
          <div className='btn-container'>
            <button
              type='button'
              className='btn btn-block clear-btn'
              onClick={() => dispatch(clearValues())}
            >
              clear
            </button>
            <button
              type='submit'
              className='btn btn-block submit-btn'
              onClick={handleSubmit}
              disabled={isLoading}
            >
              create skill
            </button>
          </div>
        </div>
      </form>
    </Styles>
  );
};

export default addSkill;
