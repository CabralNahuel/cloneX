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
import UnderlineTabs from "../../components/tabs/Tabs1.jsx";
import { MdOutlineSettings } from "react-icons/md";

const margenSup = "10px";

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
  const handleNuevoMensaje = (mensaje) => {
    setMensajes((prevMensajes) => [mensaje, ...prevMensajes]);
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
            [theme.breakpoints.up('md')]: {
              position: 'sticky',
              top: '0',
              alignSelf: 'flex-start',
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
            alignItems="center"
            height="47px"
            border="1px solid rgba(0, 0, 0, 0.1)" // Borde gris claro
            backgroundColor="transparent"
            borderRadius="1px"
          >
            <UnderlineTabs paramtro={["Todas","Verificado", "Menciones"]}  />
            <MdOutlineSettings size={20} color="black" />
          </Box>
            {/* Mostrar los mensajes (ahora ordenados) */}
            <TraerMensajesConLike mensajes={mensajes} />
          </Grid>
          <Grid item xs={12} md={2} sx={{ marginTop: margenSup }}>
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
