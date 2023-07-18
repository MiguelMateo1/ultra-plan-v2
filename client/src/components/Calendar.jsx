import { memo } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import Styles from '../assets/styles/CalendarCSS';
import Calendar from 'react-calendar';
import { sub, format } from 'date-fns'

const CalendarArea = ({date,onChange}) => {
  //   const {stats, skills} = useSelector((store) => store.allSkills);
  //   const { user } = useSelector((store) => store.user);
  //   const dispatch = useDispatch();
  //   useEffect(() => {
  //     // dispatch(getAllSkills(user.id));
  // }, []);


  return (
    <Styles>
      <div className='calendar'>
      <Calendar maxDate={new Date()} minDate={sub(new Date(), {days: 21})} 
            calendarType='gregory' next2Label={null} prev2Label={null} 
            showNeighboringMonth={false}
            formatShortWeekday={(locale, date) => format(date, 'eeeee')}
            onChange={onChange} 
            onClickDay={() => console.log('date clicked')}
            value={date} 
        />
        </div>
    </Styles>
  );
};
export default memo(CalendarArea);
