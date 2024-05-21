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
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../../firebase/Conexion.js";
import DrawerLeft from "../../components/drawer/Drawer";
import { Search as SearchIcon } from "@mui/icons-material";
import MandarMensajes from "../../components/cards/CardMandarMensajes"; // Ajusta la ruta según sea necesario
import GiphyViewer from "../../components/apis/giphy/Giphy"; // Importar GiphyViewer
import TraerMensajes from "../../components/cards/CardTraerMensajes";
import UnderlineTabs from "../../components/tabs/Tabs1.jsx";
import { MdOutlineSettings } from "react-icons/md";

const margenSup = "10px";

export default function HomePage() {
  const [mensajes, setMensajes] = useState([]);
  

  useEffect(() => {
    // Función para obtener los mensajes desde Firebase
    const obtenerMensajes = async () => {
      const mensajesQuery = query(
        collection(db, "mensajes"),
        orderBy("timestamp", "desc")
      );
      const mensajesSnapshot = await getDocs(mensajesQuery);
      const mensajesList = mensajesSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMensajes(mensajesList); // Ya están ordenados por timestamp descendente
    };

    // Llamar a la función para obtener los mensajes cuando el componente se monta
    obtenerMensajes();
  }, []);

  const handleNuevoMensaje = (mensaje) => {
    setMensajes((prevMensajes) => [mensaje, ...prevMensajes]);

  };

  

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl" > 
        <Grid container spacing={2}>
          {/* DrawerLeft */}
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              marginTop: margenSup, 
             
              alignSelf: 'flex-start' 
            }}
          >
            <DrawerLeft 
              selectedPath={"/home"}
              setMensajes={handleNuevoMensaje}
            />
          </Grid>
          {/* Contenido centrado */}
          <Grid item xs={12} md={6}   >
            
            <Box
              display="grid"
              gridTemplateColumns="90% 10%"
              alignItems="center"
              height="47px"
              border="1px solid rgba(0, 0, 0, 0.1)" // Borde gris claro
              backgroundColor="transparent"
              borderRadius="1px"
            >
              <UnderlineTabs paramtro={["Para ti","Siguiendo"]}  />
              <MdOutlineSettings size={20} color="black" />
            </Box>
            <MandarMensajes  onMessageSent={handleNuevoMensaje}/>
            {/* Mostrar los mensajes (ahora ordenados) */}
            <TraerMensajes mensajes={mensajes} />
            {/* Mostrar GiphyViewer */}
            <GiphyViewer />
          </Grid>
          <Grid item xs={12} md={2} sx={{ marginTop: margenSup }}>
            <TextField
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
