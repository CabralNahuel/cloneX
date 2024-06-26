import Avatar from "@mui/material/Avatar";
import { Card, CardContent, Box } from "@mui/material";
import * as React from "react";
import Megusta from "../buttons/Megusta";
import OtrosIconos from "../buttons/Iconos";


const TraerMensajesConLike = ({ mensajes }) => {
  
  if (!mensajes) {
    return <div>No hay mensajes disponibles</div>;
  }

  return (
    <div>
      {mensajes.map((mensaje) => (
        <Card
          key={mensaje.id}
          sx={{
            marginTop: "10px",
            width: "100%",
            borderRadius: "8px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <CardContent>
            <Box display="flex" alignItems="center" mb={2}>
              <Avatar
                alt={mensaje.correo}
                src={mensaje.photoURL || ""}
                sx={{ width: 40, height: 40, marginRight: "10px" }}
              />
              <Box sx={{ textAlign: "justify", marginTop: "7%" }}>
                <p style={{ marginBottom: "6px", color: "gray" }}>
                  {mensaje.displayName != null && mensaje.displayName !== "" && mensaje.like !== false ? mensaje.displayName : mensaje.correo}
                </p>
                <p>{mensaje.texto}</p>
              </Box>
            </Box>
            {mensaje.imagen && (
              <Box display="flex" justifyContent="center" mt={2}>
                <img
                  src={mensaje.imagen}
                  alt="Imagen adjunta"
                  style={{ width: "100%", height:"100%", borderRadius: "8px" }}
                />
              </Box>
            )}
            <Box
              sx={{
                height: "2rem",
                borderRadius: 1,
                display: "flex",
                gap: "2%",
                justifyContent: "space-between",
                marginTop: "10%",
              }}
            >
              <OtrosIconos icon="comentario" color="rgb(29, 155, 240)" />
              <Megusta icon="favorite" color="rgb(249, 24, 128)" />
              <OtrosIconos icon="repost" color="rgb(0, 186, 124)" />
              <OtrosIconos icon="alcance" color="rgb(29, 155, 240)" />
              <div style={{ display: "flex" }}>
                <OtrosIconos icon="favorito" />
                <OtrosIconos icon="compartir" />
              </div>
            </Box>
          </CardContent>
        </Card>
      ))}
    </div>
  );
  
};
export default TraerMensajesConLike;
