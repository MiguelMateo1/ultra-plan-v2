import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CalendarArea from './Calendar';
import HoursSelect from './HoursSelect';
import { logHours } from '../features/allSkills/allSkillsSlice';
import Styles from '../assets/styles/LogHoursTabsCSS';
import { format } from 'date-fns'
import { toast } from 'react-toastify';
// react mui
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
// icons
import { PiPianoKeysFill, PiGuitarFill } from "react-icons/pi";
import { 
  IoBookSharp,IoBarbellSharp,IoBasketballSharp,
  IoBicycleSharp,IoEasel,IoFlaskSharp,IoHeadsetSharp,
  IoHardwareChipSharp,IoPencilSharp,IoReaderSharp,IoSchool,
  IoTelescopeSharp,IoTerminal,IoDesktop,IoMusicalNotes,IoBrush } 
from "react-icons/io5";

const LogHoursTabs = () => {
    const { skills } = useSelector((store) => store.allSkills);
    const { user } = useSelector((store) => store.user);
    const dispatch = useDispatch();

    // selecte date on calendar
    const [date, onChange] = useState(new Date());
    const month = format(date, 'MMM');
    const btnDate = (format(date, 'MM/dd/yy'))

    // selected skill id/ gets selected id func
    const [id, setValue] = useState(skills[0].id);
    const handleSkillChange = (event, newValue) => {
        setValue(newValue);
    };

    // selected hour
    const [hour, setHour] = useState('');
    // skill index/name
    let index = skills.findIndex(i => i.id == id);
    let skillName = skills[index].skill_name;

    function handleClick () {
        if (!hour) {
            toast.warning('no hours logged, select hours');
            return
        }
        dispatch(logHours({ id, userId: user.id, month, hour }));

        // let index = skills.findIndex(i => i.id == id);
        toast.success(`Hours logged for ${skillName}!!`);
    }

    // skill icons
    const skillIcons = [<IoBookSharp/>,<IoBarbellSharp/>,<PiPianoKeysFill />,<PiGuitarFill />,<IoBasketballSharp/>,<IoBicycleSharp/>,
        <IoEasel/>,<IoFlaskSharp/>,<IoHeadsetSharp/>,<IoHardwareChipSharp/>,<IoBrush />, <IoPencilSharp/>,
        <IoReaderSharp/>,<IoSchool/>,<IoTelescopeSharp/>,<IoTerminal/>,<IoDesktop/>,<IoMusicalNotes/>
    ];

  return (
    <Styles>
        <div className='log-container'>
            <h4>log hours</h4>
            <Box className='box' sx={{ maxWidth: { xs: 365, sm: 880 }}}>
                <Tabs
                    value={id}
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
            <HoursSelect day={btnDate} hour={hour} setHour={setHour} btnClick={handleClick} name={skillName} />
        </div>
      <CalendarArea date={date} onChange={onChange}/>
    </Styles>
  );
};

export default LogHoursTabs;
