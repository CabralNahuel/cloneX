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
import TraerMensajes from "../../components/cards/CardTraerMensajes.jsx";
import { MdOutlineSettings } from "react-icons/md";

const margenSup = "10px";

export default function ProfilePage() {
  const [mensajes, setMensajes] = useState([]);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [cantidadMensajes, setCantidadMensajes] = useState(0);

  useEffect(() => {
    const obtenerMensajes = async () => {
      const auth = getAuth();
      const user = auth.currentUser;
      if (user) {
        const correo = user.email;
        const name = user.displayName;
        setName(name);
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
        setCantidadMensajes(mensajesList.length);
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

  const handleNuevoMensaje = (mensaje) => {
    setMensajes((prevMensajes) => [mensaje, ...prevMensajes]);
    setCantidadMensajes((prevCantidad) => prevCantidad + 1);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          {/* DrawerLeft */}
          <Grid
            item
            xs={12}
            md={4}
            sx={(theme) => ({
              marginTop: margenSup,
              [theme.breakpoints.up("md")]: {
                position: "sticky",
                top: "0",
                alignSelf: "flex-start",
              },
            })}
          >
            <DrawerLeft
              selectedPath={"/notifications"}
              setMensajes={handleNuevoMensaje}
            />
          </Grid>
          {/* Contenido centrado */}
          <Grid item xs={12} md={6}>
            <Box
              display="grid"
              gridTemplateColumns="90% 10%"
              gridTemplateRows="70% 30%"
              alignItems="start"
              height="47px"
              border="1px solid rgba(0, 0, 0, 0.1)" // Borde gris claro
              backgroundColor="transparent"
              borderRadius="1px"
              p={1} // Padding de 1 unidad
            >
              <Box
                sx={{
                  fontSize: "1rem",
                  justifySelf: "left",
                  fontWeight: "bold",
                }}
                gridRow="1"
                gridColumn="1"
              >
                {name}
              </Box>
              <Box
                sx={{ fontSize: "0.75rem", justifySelf: "left", color: "grey" }}
                gridRow="2"
                gridColumn="1"
              >
                {cantidadMensajes} Posts{" "}
              </Box>
              <MdOutlineSettings
                size={20}
                color="black"
                sx={{ gridRow: "1", gridColumn: "2", justifySelf: "center" }}
              />
            </Box>
            <Box
              sx={{
                margin: "1rem",
                
              }}
               
              
            >
              <BlueButton onClick={handleOpen}>Editar Perfil</BlueButton>
            </Box>
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
