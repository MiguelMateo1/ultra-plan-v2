// react/ redux
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetChart } from '../features/allSkills/allSkillsSlice';
// charts components
import BarChart from './BarChart';
import AreaChart from './AreaChart';
// css
import Styles from '../assets/styles/ChartContCSS';
// modal mui/styles
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

const ChartsContainer = () => {
  const { stats } = useSelector((store) => store.allSkills);
  const dispatch = useDispatch()
  const [barChart, setBarChart] = useState(false);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  // gets years from db if hours are logged, to display the years and select
  // to toggle between years
  function getYearsStats(data) {
    const years = Array.from(new Set(data.map(item => item.year)))
    return years;
  }
  // gets years END===

  const handleYearClick = (e) => {
    const year = e.target.textContent;
    setSelectedYear(year)
  }

  // modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const modalStyle = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 340,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 2,
  };
  // modal END==

  // Function to handle chart reset confirmation
  const handleResetChart = () => {
    dispatch(resetChart(stats[0].userId));
    handleClose(); // Close the modal after dispatching the action
  };

  return (
    <Styles>
      <h4>Monthly hours</h4>
      <button onClick={() => setBarChart(!barChart)}>
        {barChart ? 'Area Chart' : 'Bar Chart'}
      </button>
      <div className='year-container'>
        {stats.length > 0 && getYearsStats(stats).map(year => (
            <h6 key={year} onClick={handleYearClick} className={selectedYear == year ? 'active' : ''}>{year}</h6>
          ))}
      </div>
      {barChart ? <BarChart data={stats} year={selectedYear}/> : <AreaChart data={stats} year={selectedYear} />}
      {/* reset chart btn/modal */}
      <div className='reset-chart'>
        <button className='btn' onClick={handleOpen}>reset chart hours</button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={modalStyle} >
              <h5>Reset all months to 0 hours?</h5>
                <Button onClick={handleResetChart} sx={{ mt: 1, color: 'black',backgroundColor: 'red' }}>
                  confirm
                </Button>
            </Box>
          </Modal>
      </div>
    </Styles>
  );
};

export default ChartsContainer;
