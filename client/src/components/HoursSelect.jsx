import { useState } from 'react';
import Styles from '../assets/styles/HoursSelectCSS';
import { toast } from 'react-toastify';
// react mui
import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

// eslint-disable-next-line react/prop-types
const HoursSelect = ({ day, hour, setHour, btnClick, name }) => {

  // sets selected hour
  function hoursValue(value) {
    setHour(value)
  }

  const handleBtnClick = () => {
    handleClose();
    btnClick()
  }

  // modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(()=> {
    hour ? true : false
    if (hour) {
      return true
    } else {
      toast.warning('no hours logged, select hours');
      return false
    }
  });
  const handleClose = () => setOpen(false);
  const modalStyle = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 345,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 3,
  };
  // modal END==

  return (
    <Styles>
        <Stack spacing={2}>
            <Slider aria-label="Temperature" defaultValue={1.5} getAriaValueText={hoursValue}
              valueLabelDisplay="auto" step={.5} min={.5} max={12}
            />
        </Stack>
        <button className='btn' onClick={handleOpen} disabled={name == null ? true : false}>
            {hour ? `Log ${hour > 1 ? `${hour} hours` : `${hour} hour`} on ${day}` : 'select date and hours to log'}
        </button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={modalStyle}>
            <h4>Log {hour > 1 ? `${hour} hours` : `${hour} hour`} to {name}?</h4>
              <Button onClick={handleBtnClick}  sx={{ mt: 1.3,  border: '1px solid lightblue'}}>
                confirm
              </Button>
          </Box>
        </Modal>
    </Styles>
  );
};
export default HoursSelect;
