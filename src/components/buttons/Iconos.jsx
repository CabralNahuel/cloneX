import React from "react";
import { IconButton } from "@mui/material";
import { Comment, Share, Repeat, Visibility, Bookmark } from "@mui/icons-material";

const Iconos = {
  comentario: Comment,
  repost: Repeat,
  alcance: Visibility,
  favorito: Bookmark,
  compartir: Share,
};

const OtrosIconos = ({ icon, color, onClick }) => {
  const IconComponent = Iconos[icon];

  // Verifica si el componente existe
  if (!IconComponent) {
    console.error(`Icono "${icon}" no es válido.`);
    return null;
  }

  return (
    <IconButton onClick={onClick}>
      <IconComponent style={{ color }} />
    </IconButton>
  );
};

export default OtrosIconos;

