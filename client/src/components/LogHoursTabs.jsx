import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CalendarArea from './Calendar';
import HoursSelect from './HoursSelect';
import { getAllSkills, showStats } from '../features/allSkills/allSkillsSlice';
import Styles from '../assets/styles/LogHoursTabsCSS';
import { format } from 'date-fns'
import { 
    IoBookSharp,IoBarbellSharp,IoBasketballSharp,
    IoBicycleSharp,IoEasel,IoFlaskSharp,IoHeadsetSharp,
    IoHardwareChipSharp,IoPencilSharp,IoReaderSharp,IoSchool,
    IoTelescopeSharp,IoTerminal,IoDesktop } 
  from "react-icons/io5";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const LogHoursTabs = () => {
    const {stats, skills} = useSelector((store) => store.allSkills);
    // const { user } = useSelector((store) => store.user);
    // const dispatch = useDispatch();

    // selecte date on calendar
    const [date, onChange] = useState(new Date());
    // selected skill id/ gets selected id func
    const [value, setValue] = useState(skills[0].id);
    const handleSkillChange = (event, newValue) => {
        setValue(newValue);
    };
    // selected hour
    const [hour, setHour] = useState('')
    console.log(format(date, 'MMM'))
    const day = (format(date, 'MM/dd/yy'))

    // useEffect(() => {
    //     dispatch(getAllSkills(user.id));
    // }, []);

    // skill icons
    const skillIcons = [<IoBookSharp/>,<IoBarbellSharp/>,<IoBasketballSharp/>,<IoBicycleSharp/>,
        <IoEasel/>,<IoFlaskSharp/>,<IoHeadsetSharp/>,<IoHardwareChipSharp/>, <IoPencilSharp/>,
        <IoReaderSharp/>,<IoSchool/>,<IoTelescopeSharp/>,<IoTerminal/>,<IoDesktop/>
    ];

  return (
    <Styles>
        <div className='log-container'>
            <h4>log hours</h4>
            <Box className='box' sx={{ maxWidth: { xs: 365, sm: 880 }}}>
                <Tabs
                    value={value}
                    onChange={handleSkillChange}
                    textColor="primary"
                    variant="scrollable"
                    scrollButtons
                    allowScrollButtonsMobile
                    aria-label="scrollable force tabs"
                    >
                    {skills.map((skill,index) => (
                    <Tab key={index} label={skill.skill_name} value={skill.id}
                        icon={skillIcons[skill.icon]} iconPosition="top" />
                ))}
                </Tabs>
            </Box>
            <HoursSelect day={day} hour={hour} setHour={setHour} />
        </div>
      <CalendarArea date={date} onChange={onChange}/>
    </Styles>
  );
};

export default LogHoursTabs;
