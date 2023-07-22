import { memo } from 'react';
import Styles from '../assets/styles/CalendarCSS';
import Calendar from 'react-calendar';
import { sub, format } from 'date-fns'

const CalendarArea = ({date,onChange}) => {

  return (
    <Styles>
      <div className='calendar'>
      <Calendar maxDate={new Date()} minDate={sub(new Date(), {days: 21})} 
            calendarType='gregory' next2Label={null} prev2Label={null} 
            showNeighboringMonth={false}
            formatShortWeekday={(locale, date) => format(date, 'eeeee')}
            onChange={onChange} 
            value={date} 
        />
        </div>
        <h6>*note, can only go back 3 weeks to log hours</h6>
    </Styles>
  );
};
export default memo(CalendarArea);
