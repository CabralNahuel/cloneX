import { IconButton } from "@mui/material";
import { Favorite, Comment, Share, Repeat, Visibility, Bookmark } from "@mui/icons-material";

const iconMap = {
  comentario: Comment,
  favorite: Favorite,
  repost: Repeat,
  alcance: Visibility,
  favorito: Bookmark,
  compartir: Share
};

const Megusta = ({ icon, color, onClick }) => {
  const IconComponent = iconMap[icon];

  return (
    <IconButton onClick={onClick}>
      <IconComponent style={{ color }} />
    </IconButton>
  );
};

export default Megusta;
