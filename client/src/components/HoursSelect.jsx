// import { useDispatch, useSelector } from 'react-redux';
import Styles from '../assets/styles/HoursSelectCSS';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const HoursSelect = ({ day, hour, setHour }) => {
  //   const {stats, skills} = useSelector((store) => store.allSkills);
  //   const { user } = useSelector((store) => store.user);
  //   const dispatch = useDispatch();


//   gets select hour
  const handleClick = (e) => {
    if (e.target.getAttribute('aria-label')) {
        const hour = e.target.getAttribute('aria-label');
        setHour(hour[hour.length - 1])
    }
  }

  return (
    <Styles>
        <Stack spacing={2}>
            {hour 
            ? <Pagination count={9} color='primary' onClick={handleClick} hidePrevButton hideNextButton/>
            : <Pagination count={9} onClick={handleClick} hidePrevButton hideNextButton/>
            }
        </Stack>
        <button className='btn'>{hour ? `Log ${hour} hour on ${day}` : 'select date and hours to log'}</button>
    </Styles>
  );
};
export default HoursSelect;
