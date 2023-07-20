import { useState } from 'react';
import BarChart from './BarChart';
import AreaChart from './AreaChart';
import { useDispatch, useSelector } from 'react-redux';
import Styles from '../assets/styles/ChartContCSS';
import { resetChart } from '../features/allSkills/allSkillsSlice';
// modal mui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

const ChartsContainer = () => {
  const [barChart, setBarChart] = useState(true);
  const { stats } = useSelector((store) => store.allSkills);
  const dispatch = useDispatch()

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
      {barChart ? <BarChart data={stats} /> : <AreaChart data={stats} />}
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
