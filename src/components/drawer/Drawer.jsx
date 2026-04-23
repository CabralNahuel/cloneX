import React, { useState } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import {
  Button,
  Container,
  Drawer,
  IconButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Link } from 'react-router-dom';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu';
import "./estilo.css";
import ModalPost from '../modals/modalPost';

import X from '../x/X'

import { GoHome } from "react-icons/go";
import { GoHomeFill } from "react-icons/go";

import { FiSearch } from "react-icons/fi";
import { RiSearchFill } from "react-icons/ri";

import { PiBellBold } from "react-icons/pi";
import { PiBellFill } from "react-icons/pi";

import { LuMail } from "react-icons/lu";
import { HiMail } from "react-icons/hi";

import { RiFileList2Line } from "react-icons/ri";
import { RiFileList2Fill } from "react-icons/ri";

import { IoBookmark } from "react-icons/io5";
import { PiBookmarkSimpleBold } from "react-icons/pi";

import { CgMoreO } from "react-icons/cg";
import { PiDotsThreeCircleFill } from "react-icons/pi";

import { BsPeople } from "react-icons/bs";
import { BsPeopleFill } from "react-icons/bs";

import { IoPersonOutline } from "react-icons/io5";
import { IoPersonSharp } from "react-icons/io5";

import ButtonDrawer from '../cards/ButtonDrawer';



const drawerWidth = "100%";
const sizeIcon = 25;

const menuItems = [  
  { text: 'Home', icon: <GoHome size={sizeIcon} color='black' />, altIcon: <GoHomeFill size={sizeIcon} color='black' />, path: '/home'},
  { text: 'Explore', icon: <FiSearch size={sizeIcon} color='black' />, altIcon: <RiSearchFill size={sizeIcon} color='black' />, path: '/explore' },
  { text: 'Notifications', icon: <PiBellBold size={sizeIcon} color='black' />, altIcon: <PiBellFill size={sizeIcon} color='black' />, path: '/notifications' },
  { text: 'Messages', icon: <LuMail size={sizeIcon} color='black' />, altIcon: <HiMail size={sizeIcon} color='black' />, path: '/messages' },
  { text: 'Lists', icon: <RiFileList2Line size={sizeIcon} color='black' />, altIcon: < RiFileList2Fill size={sizeIcon} color='black' />, path: '/lists' },
  { text: 'Bookmarks', icon: <PiBookmarkSimpleBold size={sizeIcon} color='black' />, altIcon: <IoBookmark size={sizeIcon} color='black' />, path: '/bookmarks' },
  { text: 'Communities', icon: <BsPeople size={sizeIcon} color='black' />, altIcon: <BsPeopleFill size={sizeIcon} color='black' />, path: '/communities' },
  { text: 'Premium', icon: <X  width="25px"  marginLeft='0px' style={{ marginBottom: '16px'}} />, altIcon: <X  width="25px" style={{ marginBottom: '16px', marginLeft: -50, margin: 0 }} />, path: '/premium' },
  { text: 'Profile', icon: <IoPersonOutline size={sizeIcon} color='black' />, altIcon: <IoPersonSharp size={sizeIcon} color='black' />, path: '/profile' },
  { text: 'More', icon: <CgMoreO size={sizeIcon} color='black' />, altIcon: <PiDotsThreeCircleFill size={sizeIcon} color='black' />, path: '/more' }
];


  export default function DrawerLeft({ selectedPath, setMensajes }) {
    const [selectedItem, setSelectedItem] = useState('');
    const [open, setOpen] = useState(false);
    const [openMobileDrawer, setOpenMobileDrawer] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const handleOpenModalPost = () => {
      setOpen(true);
    }

    const handleCloseModalPost = () => {
      setOpen(false);
    }

    const handleSetMensajes = (mensaje) => {
      if (setMensajes) {
        setMensajes(mensaje);
      }
      setOpen(false);
    }

    const handleItemClick = (path) => {
      setSelectedItem(path);
      if (isMobile) {
        setOpenMobileDrawer(false);
      }
    };

    const drawerContent = (
      <Box sx={{ width: isMobile ? 280 : "100%", display: "grid", paddingLeft: 0 }}>
        <Box sx={{ display: "grid", marginLeft: 2, width: "30px" }}>
          <X width="30px" marginLeft="12px" margin="10px" />
        </Box>
        <List style={{ display: 'grid', justifyContent: "left" }}>
          {menuItems.map((item) => (
            <ListItem
              key={item.text}
              style={{ marginBottom: '0px', fontSize: '20px', width: "220px", textAlign: "left" }}
              selected={selectedItem === item.path}
              className='menu-text'
              onClick={() => handleItemClick(item.path)}
            >
              <ListItemButton component={Link} to={item.path} sx={{ display: "grid", gridTemplateColumns: "auto auto auto" }}>
                <ListItemIcon>
                  {selectedPath === item.path ? item.altIcon : item.icon}
                </ListItemIcon>
                <ListItemText sx={{ textAlign: "left" }} />{item.text}
              </ListItemButton>
            </ListItem>
          ))}
          <Button
            onClick={handleOpenModalPost}
            variant="contained"
            sx={{
              Width: "220px",
              height: '50px',
              borderRadius: '999px',
              bgcolor: 'rgb(29, 155, 240)',
              '&:hover': {
                bgcolor: '#59a3f7',
              },
            }}
          >
            Post
          </Button >
          <Box sx={{ marginTop: '2rem' }} >
            <ButtonDrawer />
          </Box>
        </List>
      </Box>
    );
    
    return (
      <React.Fragment>
        <CssBaseline  />
        <Container xs={3} sm={2} sx={{padding:0,margin:0}}>
          <ModalPost open={open} onClose={handleCloseModalPost} onMensajes={handleSetMensajes} />
          {isMobile ? (
            <>
              <Box sx={{ display: "flex", justifyContent: "flex-start", paddingY: 1 }}>
                <IconButton
                  aria-label="Abrir menu"
                  onClick={() => setOpenMobileDrawer(true)}
                  sx={{ color: "black" }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
              <Drawer
                anchor="left"
                open={openMobileDrawer}
                onClose={() => setOpenMobileDrawer(false)}
              >
                {drawerContent}
              </Drawer>
            </>
          ) : (
            <Box sx={{ display: 'grid', paddingLeft: 0 }}>
              <Box
                sx={{
                  width: drawerWidth,
                }}
                display="grid"
              >
                {drawerContent}
              </Box>
            </Box>
          )}
        </Container>
      </React.Fragment>
    );
  }
  
