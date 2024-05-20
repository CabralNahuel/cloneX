import React from "react";
import { Dialog, DialogContent, DialogTitle, Button, Box } from "@mui/material";
import EditProfile from "./EditProfile"; // Asegúrate de importar tu componente EditProfile

const EditProfileModal = ({ open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <Box display="flex" justifyContent="space-between" alignItems="center" >
        <Button onClick={handleClose} color="primary" sx={{ fontWeight: 'bold', fontSize:'1.5rem' }}>
          X
        </Button>
        <DialogTitle sx={{ flexGrow: 1, textAlign: 'center', margin: 0 }}>
          Editar Perfil
        </DialogTitle>
        <div style={{ width: '40px' }} /> {/* Esto es para ocupar espacio y centrar el título */}
      </Box>
      <DialogContent>
        <EditProfile />
      </DialogContent>
    </Dialog>
  );
};

export default EditProfileModal;

