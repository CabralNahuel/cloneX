import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Popper from '@mui/material/Popper';
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/Conexion"; 
import { Button, Fade, Paper  } from '@mui/material';
import { useSelector } from 'react-redux';


export default function UserProfile() {
  const [isHovered, setIsHovered] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const navigate = useNavigate();

  const user = useSelector((state) => state.authUser.auth);

  const avatar = user.avatar;
  const name = user.name;
  const correo = user.email;
  
/*
  if (user) {
    avatar = user.photoURL || ''; // Si photoURL es null, asigna un valor vacío
    name = user.displayName || ''; // Si displayName es null, asigna un valor vacío
  }
*/
  const handleLogout = () => {
    auth.signOut(); // Utiliza 'auth' desde 'Conexion.js'
    navigate("/");
  };


  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handlePopper = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(!(open));

  };


  return (
    <div 
      style={{ 
        display:"flex",
        alignItems: 'center', 
        gap: '10px',
        backgroundColor: isHovered ? '#f0f0f0' : 'transparent',
        borderRadius: '999px',
      
        transition: 'background-color 0.3s ease',
        cursor: 'pointer',
        width: '240px',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Popper
        // Note: The following zIndex style is specifically for documentation purposes and may not be necessary in your application.
        sx={{ zIndex: 1200, padding: 1 , width:240}}
        open= {open}
        anchorEl={anchorEl}
        placement='top-start'
        transition
        modifiers={[
          {
            name: 'offset',
            options: {
              offset: [-200, 0], // Ajusta el desplazamiento aquí (20 píxeles hacia la derecha)
            },
          },
        ]}
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper>
              <Button onClick={handleLogout}>Log out @{name} </Button>
            </Paper>
          </Fade>
        )}
      </Popper>
      <Avatar alt={name} src={avatar} sx={{ width: 40, height: 40}} />
      <div style={{ flex: 1 }}>
        <p style={{ marginBottom: '0', fontWeight: 'bold', color: 'black', textAlign: 'left' }}>{name}</p>
        <p style={{ marginBottom: '0', color: 'gray', textAlign: 'left' }}>{correo}</p>
      </div>
      <div style={{ flex: 1 }}>
      
        <MoreHorizIcon onClick={handlePopper}  />
      
      </div>
    </div>
  );
}