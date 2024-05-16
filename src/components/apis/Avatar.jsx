import React, { useState, useEffect } from "react";
import axios from "axios";
import { Avatar } from "@mui/material";

const AvatarComponent = ({ showAvatar }) => { 
  const [usuario, setUsuario] = useState(null);

  const fetchGifs = async () => {
    try {
      const response = await axios.get('https://randomuser.me/api/');
      const data = response.data;

      
      setUsuario(data);
 
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchGifs();
  }, []);

  return (
    <div>
      <div>
        {usuario && (
          <div>
            {showAvatar && (
              <Avatar alt={"foto"} src={usuario.results[0].picture.thumbnail|| ""} />
            )}
            {!showAvatar && <p>{usuario.results[0].name.first +" "+ usuario.results[0].name.last}</p>}
          </div>
        )}
      </div>
    </div>
  );
};

export default AvatarComponent;
