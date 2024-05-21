import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import MandarMensajes from '../cards/CardMandarMensajes';

const style = {
  position: 'absolute',
  top: '20%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '20px',
};

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  mb: 2,
};

export default function ModalPost({ open, onClose, onMensajes }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={headerStyle}>
            <IconButton onClick={onClose} sx={{ color: 'black' }}>
              <CloseIcon />
            </IconButton>
            <h6 id="modal-modal-title" style={{ color: '#2e92ff'}}>Drafts</h6>
          </Box>
          <MandarMensajes onMessageSent={onMensajes}/>
        </Box>
      </Modal>
    </div>
  );
}
