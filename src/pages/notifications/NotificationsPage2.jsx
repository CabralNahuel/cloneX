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
import { getAuth } from "firebase/auth";

import DrawerLeft from "../../components/drawer/Drawer.jsx";
import { Search as SearchIcon } from "@mui/icons-material";
import TraerMensajesConLike from "../../components/cards/CardTraerMensajesConLike.jsx";
import { MdOutlineSettings } from "react-icons/md";

const margenSup = "80px";

export default function NotificationPage() {
  const [mensajes, setMensajes] = useState([]);
  

  useEffect(() => {
    const obtenerMensajesConLike = async () => {
      const auth = getAuth();
      const user = auth.currentUser;
      if (user) {
        const correo = user.email;
        const mensajesQuery = query(
          collection(db, "mensajes"),
          where("correo", "==", correo),
          where("like", "==", true),
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
    obtenerMensajesConLike();
  }, []);

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
              
              <MdOutlineSettings size={20} color="black" />
            </Box>
            
            {/* Mostrar los mensajes (ahora ordenados) */}
            <TraerMensajesConLike mensajes={mensajes} />
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
