import { Avatar, Box, Button, Card, CardContent, CardHeader, Grid } from '@mui/material';
import { useState, useRef } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase/Conexion.js";
import { useSelector } from 'react-redux';
import { AiOutlinePicture } from "react-icons/ai";
import { AiTwotoneCloseCircle } from "react-icons/ai";

const MandarMensajes = ({ onMessageSent }) => {
  const user = useSelector((state) => state.authUser.auth);

  const avatar = user.avatar;
  const name = user.name;
  const correo = user.email;

  const [texto, setTexto] = useState("");
  const [preview, setPreview] = useState(null);

  const fileInputRef = useRef(null);

  // Manejar el evento de cambio del input de archivo
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
        // Restablecer el valor del input después de leer la imagen
        event.target.value = null;
      };
      reader.readAsDataURL(file);
    }
  };

  const crearMensaje = async (e) => {
    e.preventDefault();
    const mensaje = {
      texto: texto,
      correo: correo,
      photoURL: avatar,
      displayName: name,
      imagen: preview,
      timestamp: serverTimestamp()
    };
    
    try {
      const mensajes = collection(db, "mensajes");
      const docRef = await addDoc(mensajes, mensaje);
      mensaje.id = docRef.id;
      onMessageSent(mensaje);
      setTexto("");
      setPreview(null);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const removeImage = () => {
    setPreview(null);
  };

  return (
    <Card sx={{ width: '100%' }}>
      <CardHeader
        avatar={
          <Avatar 
            alt={name}
            src={avatar}
            sx={{ width: 48, height: 48 }} 
          />
        }
        title={
          <input
            id="input-mode"
            type="text"
            placeholder="What is happening?!"
            style={{
              width: '100%',
              padding: '8px 12px',
              fontSize: '1rem',
              border: 'none',
              outline: 'none',
            }}
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
          />
        }
      />
      <CardContent>
        <Grid container spacing={2} alignItems="center">
          <div>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              style={{ display: 'none' }}
              onChange={handleImageChange}
            />
            {preview && (
              <div style={{ position: 'relative', display: 'inline-block' }}>
                <img src={preview} alt="Preview" style={{ width: '200px', height: 'auto' }} />
                <AiTwotoneCloseCircle
                  style={{
                    position: 'absolute',
                    top: 5,
                    right: 2,
                    cursor: 'pointer',
                    backgroundColor: 'transparent',
                    borderRadius: '50%',
                    fontSize: '1.5rem',
                  }}
                  onClick={removeImage}
                />
              </div>
            )}
          </div>
          <Grid item xs={12} sm={12} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div onClick={handleIconClick} style={{ cursor: 'pointer' }}>
              <AiOutlinePicture style={{ color: '#7abaff', fontSize: '1.5rem', marginRight: '10px' }} />
            </div>
            <Box sx={{ flexGrow: 1 }} />
            <Button
              onClick={crearMensaje}
              variant="contained"
              sx={{
                borderRadius: '999px',
                bgcolor: '#7abaff',
                '&:hover': {
                  bgcolor: '#59a3f7',
                },
              }}
            >
              Post
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default MandarMensajes;
