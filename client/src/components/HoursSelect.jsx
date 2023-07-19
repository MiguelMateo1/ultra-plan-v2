import { useState } from 'react';
import Styles from '../assets/styles/HoursSelectCSS';
import { toast } from 'react-toastify';
// react mui
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

const HoursSelect = ({ day, hour, setHour, btnClick, name }) => {

//   gets select hour
  const handleClick = (e) => {
    if (e.target.getAttribute('aria-label')) {
        const hour = e.target.getAttribute('aria-label');
        setHour(hour[hour.length - 1])
    }
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
      width: 360,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
  };
  // modal END==

  return (
    <Styles>
        <Stack spacing={2}>
            {hour 
            ? <Pagination count={9} color='primary' onClick={handleClick} hidePrevButton hideNextButton/>
            : <Pagination count={9} onClick={handleClick} hidePrevButton hideNextButton/>
            }
        </Stack>
        <button className='btn' onClick={handleOpen}>
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
              <Button type='button' onClick={handleBtnClick}>
                confirm
              </Button>
          </Box>
        </Modal>
    </Styles>
  );
};
export default HoursSelect;
