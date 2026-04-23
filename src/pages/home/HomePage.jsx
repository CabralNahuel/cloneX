import * as React from "react";
import { useState, useEffect } from "react";
import {
  CssBaseline,
  Box,
  Grid,
  Container,
  TextField,
  InputAdornment,
  Card,
  CardContent,
  Skeleton,
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
  const [loadingMensajes, setLoadingMensajes] = useState(true);

  useEffect(() => {
    // Función para obtener los mensajes desde Firebase
    const obtenerMensajes = async () => {
      try {
        const mensajesQuery = query(
          collection(db, "mensajes"),
          orderBy("timestamp", "desc")
        );
        const mensajesSnapshot = await getDocs(mensajesQuery);
        const mensajesList = mensajesSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMensajes(mensajesList);
      } catch (error) {
        console.error("Error al cargar mensajes:", error);
      } finally {
        setLoadingMensajes(false);
      }
    };

    // Llamar a la función para obtener los mensajes cuando el componente se monta
    obtenerMensajes();
  }, []);

  const handleNuevoMensaje = (mensaje) => {
    setMensajes((prevMensajes) => [mensaje, ...prevMensajes]);
  };

  const feedSkeleton = (
    <Box>
      {[1, 2, 3].map((item) => (
        <Card key={item} sx={{ marginTop: "10px", width: "100%", borderRadius: "8px" }}>
          <CardContent>
            <Box display="flex" alignItems="center" mb={2}>
              <Skeleton variant="circular" width={40} height={40} />
              <Box sx={{ width: "100%", marginLeft: 1.5 }}>
                <Skeleton variant="text" width="30%" height={18} />
                <Skeleton variant="text" width="90%" height={22} />
                <Skeleton variant="text" width="75%" height={22} />
              </Box>
            </Box>
            <Skeleton variant="rounded" width="100%" height={180} />
          </CardContent>
        </Card>
      ))}
    </Box>
  );

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl"> 
        <Grid container spacing={2}>
          {/* DrawerLeft */}
          <Grid
            item
            xs={12}
            md={3}
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
              selectedPath={"/home"}
              setMensajes={handleNuevoMensaje}
            />
          </Grid>
          {/* Contenido centrado */}
          <Grid item xs={12} md={6} lg={7}>
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
            {loadingMensajes ? (
              feedSkeleton
            ) : (
              <>
                <TraerMensajes mensajes={mensajes} setMensajes={setMensajes} />
                <GiphyViewer />
              </>
            )}
          </Grid>
          <Grid item xs={12} md={3} lg={2} sx={{ marginTop: margenSup, display: { xs: "none", md: "block" } }}>
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
