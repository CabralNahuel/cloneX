import * as React from "react";
import { useState, useEffect } from "react";
import {
  CssBaseline,
  Box,
  Grid,
  Container,
  TextField,
  InputAdornment,
} from "@mui/material";
import { collection, getDocs, query, where, orderBy } from "firebase/firestore";
import { db } from "../../firebase/Conexion.js";
import BlueButton from "../../components/buttons/BlueButton.jsx";
import EditProfileModal from "./EditProfileModal.jsx";
import { getAuth } from "firebase/auth";

import DrawerLeft from "../../components/drawer/Drawer.jsx";
import { Search as SearchIcon } from "@mui/icons-material";
import GiphyViewer from "../../components/apis/giphy/Giphy.jsx";
import TraerMensajes from "../../components/cards/CardTraerMensajes.jsx";
import UnderlineTabs from "../../components/tabs/Tabs1.jsx";
import { MdOutlineSettings } from "react-icons/md";

const margenSup = "80px";

export default function ProfilePage() {
  const [mensajes, setMensajes] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const obtenerMensajes = async () => {
      const auth = getAuth();
      const user = auth.currentUser;
      if (user) {
        const correo = user.email;
        const mensajesQuery = query(
          collection(db, "mensajes"),
          where("correo", "==", correo),
          orderBy("timestamp", "desc")
        );
        const mensajesSnapshot = await getDocs(mensajesQuery);
        const mensajesList = mensajesSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMensajes(mensajesList);
      }
    };
    obtenerMensajes();
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ marginLeft: "-10px", marginTop: "-80px" }}>
        <Grid container spacing={2}>
          {/* DrawerLeft */}
          <Grid
            item
            xs={12}
            md={3}
            sx={{
              marginTop: margenSup,
              position: "sticky",
              top: "0",
              alignSelf: "flex-start",
            }}
          >
            <DrawerLeft
              selectedPath={"/home"}
              sx={{ display: "flex", height: "100%" }}
            />
          </Grid>
          {/* Contenido centrado */}
          <Grid item xs={12} md={6} sx={{ marginTop: margenSup }}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              border="1px solid rgba(0, 0, 0, 0.1)" // Borde gris claro
              backgroundColor="transparent"
              borderRadius="1px"
              padding="0.1rem"
            >
              <UnderlineTabs />
              <MdOutlineSettings size={20} color="black" />
            </Box>
            <BlueButton onClick={handleOpen}>Editar Perfil</BlueButton>
            <EditProfileModal open={open} handleClose={handleClose} />
            {/* Mostrar los mensajes (ahora ordenados) */}
            <TraerMensajes mensajes={mensajes} />
          </Grid>
          <Grid item xs={12} md={3} sx={{ marginTop: margenSup }}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search..."
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
                sx: {
                  bgcolor: "#ffffff", // Fondo gris claro
                  borderRadius: "999px", // Borde redondeado
                  "& input": {
                    borderRadius: "999px", // Borde redondeado
                  },
                },
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
