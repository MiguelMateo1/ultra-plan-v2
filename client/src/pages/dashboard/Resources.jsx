import { useState } from 'react';
import styled from 'styled-components'
import RecommendedBooks from '../../components/resources/RecommendedBooks';
import RecommendedApps from '../../components/resources/RecommendedApps';
import Footer from '../../components/resources/Footer';
// modal mui/styles
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const Resources = () => {

    // modal
    const [open, setOpen] = useState(true);
    const handleClose = () => setOpen(false);
    const modalStyle = {
        position: 'absolute',
        minWidth: 340,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 5,
    };
    // modal END==

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
              <h4>Welcome to our Resource page!</h4>
              <br></br>
              <h5 style={{ textTransform: 'none' }}>Here you will find a handpicked selection 
               of recommended books, and useful apps to support
               you on your learning journey. Happy learning!</h5>
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