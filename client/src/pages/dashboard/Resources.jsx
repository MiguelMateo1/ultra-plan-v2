import { useState } from 'react';
import { RxCross1 } from "react-icons/rx"; // icon
import styled from 'styled-components'
import RecommendedBooks from '../../components/resources/RecommendedBooks';
import RecommendedApps from '../../components/resources/RecommendedApps';
import Footer from '../../components/resources/Footer';
// modal mui/styles
import { Box, Button, Modal } from '@mui/material';

// modal styles
const modalStyle = {
  position: 'absolute',
  minWidth: 354,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'white', // Adjust background color as needed
  border: '2px solid black', // Adjust border color and style as needed
  boxShadow: 24,
  padding: 4,
  textAlign: 'center',
};

const btnStyle = {
  position: 'absolute',
  top: 7,
  right: 9,
  backgroundColor: 'transparent',
  border: '1px solid transparent',
  borderRadius: '50%',
  width: '40px',
  height: '40px',
  transition: 'transform 0.5s, border 0.5s',
};

const Icon = {
  fontSize: '20px',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

const btnHoverStyle = {
  '&:hover': {
    transform: 'rotate(180deg)',
    border: '1px solid black',
  },
};
// modal styles END==

const Resources = () => {
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);
  
  return (
    <Styles>
      <RecommendedBooks />
      <RecommendedApps />
      <Footer />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Box sx={{ ...btnStyle, ...btnHoverStyle }} onClick={handleClose}>
            <RxCross1 style={Icon}/>
          </Box>
          <h4 style={{ fontSize: '32px' }} >Welcome to our Resource page!</h4>
          <br />
          <h5 style={{ textTransform: 'none' }}>
            Here you will find a handpicked selection of recommended books, and useful apps to
            support you on your learning journey!
          </h5>
        </Box>
      </Modal>
    </Styles>
  );
};

  // css
  const Styles = styled.div`
  color: #fff;
  background-color: var(--grey-4);
  width: 111%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  margin: -35px 0;
  margin-left: -5.5%;
  padding: 3rem 0;
  padding-left: -5.5%;
`

export default Resources;